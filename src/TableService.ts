import { TableService, common, services } from 'azure-storage';

export class AzureTable {
    constructor(protected service: TableService, protected table: string) { }

    public createTableIfNotExist(options?: common.RequestOptions) {
        return new Promise((resolve, reject) =>
            this.service.createTableIfNotExists(this.table, options, (err, result) =>
                err ? reject(err) : resolve(result)));
    }

    public insertEntity(entity: any) {
        return new Promise((resolve, reject) =>
            this.service.insertEntity(this.table, entity, (err, result) =>
                err ? reject(err) : resolve(result)));
    }

    public insertOrReplaceEntity(entity: any) {
        return new Promise((resolve, reject) =>
            this.service.insertOrReplaceEntity(this.table, entity, (err, result) =>
                err ? reject(err) : resolve(result)));
    }

    public retrieveEntity<T>(partKey: string, rowKey: string) {
        return new Promise((resolve, reject) =>
            this.service.retrieveEntity(this.table, partKey, rowKey, (err, result) =>
                err ? reject(err) : resolve(result)));
    }

    public queryEntities<T>(query: services.table.TableQuery, token?: TableService.TableContinuationToken) {
        return new Promise((resolve, reject) =>
            this.service.queryEntities(this.table, query, token, (err, result) =>
                err ? reject(err) : resolve(result)));
    }

    public deleteEntity(PartitionKey: string, RowKey: string) {
        return new Promise((resolve, reject) => 
            this.service.deleteEntity(this.table, { PartitionKey, RowKey }, (err, result) =>
                err ? reject(err) : resolve(result)));
    }
}