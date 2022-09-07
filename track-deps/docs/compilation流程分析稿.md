# compilation 流程分析稿

## queue
``` js
/** @type {AsyncQueue<Module, Module, Module>} */
this.processDependenciesQueue = new AsyncQueue({
  name: 'processDependencies',
  parallelism: options.parallelism || 100,
  processor: this._processModuleDependencies.bind(this),
});

/** @type {AsyncQueue<Module, string, Module>} */
this.addModuleQueue = new AsyncQueue({
  name: 'addModule',
  parent: this.processDependenciesQueue,
  getKey: (module) => module.identifier(),
  processor: this._addModule.bind(this),
});

/** @type {AsyncQueue<FactorizeModuleOptions, string, Module | ModuleFactoryResult>} */
this.factorizeQueue = new AsyncQueue({
  name: 'factorize',
  parent: this.addModuleQueue,
  processor: this._factorizeModule.bind(this),
});

/** @type {AsyncQueue<Module, Module, Module>} */
this.buildQueue = new AsyncQueue({
  name: 'build',
  parent: this.factorizeQueue,
  processor: this._buildModule.bind(this),
});
```

## flow
- addEntry
	- _addEntryItem
		- addModuleTree(dependency)
			- handleModuleCreation(factory, dependencies, originModule)
				- factorizeQueue.add
					- _factorizeModule
						- factory.create(dependencies)
							- addModuleQueue.add
								- _addModule // 避免重复添加
									- moduleGraph.setResolvedModule // 处理 incomingConnections
									- _handleModuleBuildAndDependencies
										- buildQueue.add
											- _buildModule
												- processDependenciesQueue.add
													- _processModuleDependencies
														- onDependenciesSorted
															- handleModuleCreation