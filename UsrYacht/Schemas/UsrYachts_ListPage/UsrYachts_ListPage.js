define("UsrYachts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachts"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrYachts"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 185
						},
						{
							"id": "beb56680-51aa-a43a-fca2-abb224f7ea2a",
							"code": "PDS_UsrPrice",
							"caption": "#ResourceString(PDS_UsrPrice)#",
							"dataValueType": 32,
							"width": 183
						},
						{
							"id": "cca5948f-61ac-4812-58e2-7c1ab6b24f65",
							"code": "PDS_UsrDriveType",
							"caption": "#ResourceString(PDS_UsrDriveType)#",
							"dataValueType": 10,
							"width": 186
						},
						{
							"id": "0f09e11d-5fda-528b-d96d-1d5f82d7c5de",
							"code": "PDS_UsrStatus",
							"caption": "#ResourceString(PDS_UsrStatus)#",
							"dataValueType": 10,
							"width": 165
						},
						{
							"id": "cf748dc4-0dc4-aa73-895c-066b6d66e3e4",
							"code": "PDS_UsrPassengersCount",
							"caption": "#ResourceString(PDS_UsrPassengersCount)#",
							"dataValueType": 4,
							"width": 179
						},
						{
							"id": "c276607f-7d7b-2aba-efaf-003ee96b705e",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"visible": true,
					"activeRow": "$DataTable_ActiveRow",
					"_filterOptions": {
						"from": [
							"Items",
							"DataTable_ActiveRow"
						],
						"expose": [
							{
								"attribute": "DataTable_d2289ac6_ExposeFilter",
								"converters": [
									{
										"converter": "crt.ToValuesFromCollection",
										"args": [
											"Items",
											"Id"
										]
									},
									{
										"converter": "crt.ToInFilter",
										"args": [
											"UsrParentYacht"
										]
									}
								]
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrYachts",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			},
			{
				"operation": "insert",
				"name": "Label_bwyinwu",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_bwyinwu_caption)#)#",
					"labelType": "headline-1",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "ListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_bk17h84",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_bk17h84_caption)#)#",
					"labelType": "headline-1",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "ListTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_b0lx7u3",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_b0lx7u3",
					"primaryColumnName": "DataGrid_b0lx7u3DS_Id",
					"columns": [
						{
							"id": "417e467f-421d-9f39-ecdc-27f164b5f799",
							"code": "DataGrid_b0lx7u3DS_UsrStartDate",
							"caption": "#ResourceString(DataGrid_b0lx7u3DS_UsrStartDate)#",
							"dataValueType": 8,
							"width": 155
						},
						{
							"id": "f69bf5ac-4c82-a52b-3f31-23ed8d335a99",
							"code": "DataGrid_b0lx7u3DS_UsrEndDate",
							"caption": "#ResourceString(DataGrid_b0lx7u3DS_UsrEndDate)#",
							"dataValueType": 8,
							"width": 162
						},
						{
							"id": "04daae68-cc6e-eadb-e34a-17ff18375270",
							"code": "DataGrid_b0lx7u3DS_UsrComment",
							"caption": "#ResourceString(DataGrid_b0lx7u3DS_UsrComment)#",
							"dataValueType": 28,
							"width": 193
						},
						{
							"id": "cfbf4621-2071-1907-bb63-177f7b8cce71",
							"code": "DataGrid_b0lx7u3DS_CreatedOn",
							"caption": "#ResourceString(DataGrid_b0lx7u3DS_CreatedOn)#",
							"dataValueType": 7,
							"width": 165
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "ListTabContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_b0lx7u3": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_b0lx7u3DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "CreatedOn"
									}
								]
							},
							"filterAttributes": [
								{
									"name": "DataTable_d2289ac6_ExposeFilter",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_b0lx7u3DS_UsrStartDate": {
									"modelConfig": {
										"path": "DataGrid_b0lx7u3DS.UsrStartDate"
									}
								},
								"DataGrid_b0lx7u3DS_UsrEndDate": {
									"modelConfig": {
										"path": "DataGrid_b0lx7u3DS.UsrEndDate"
									}
								},
								"DataGrid_b0lx7u3DS_UsrComment": {
									"modelConfig": {
										"path": "DataGrid_b0lx7u3DS.UsrComment"
									}
								},
								"DataGrid_b0lx7u3DS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_b0lx7u3DS.CreatedOn"
									}
								},
								"DataGrid_b0lx7u3DS_Id": {
									"modelConfig": {
										"path": "DataGrid_b0lx7u3DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_UsrDriveType": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrStatus": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrPassengersCount": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "desc",
							"columnName": "CreatedOn"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"DataGrid_b0lx7u3DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrYachts",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrPrice": {
							"path": "UsrPrice"
						},
						"UsrDriveType": {
							"path": "UsrDriveType"
						},
						"UsrStatus": {
							"path": "UsrStatus"
						},
						"UsrPassengersCount": {
							"path": "UsrPassengersCount"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"DataGrid_b0lx7u3DS": [
						{
							"attributePath": "UsrParentYacht",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});