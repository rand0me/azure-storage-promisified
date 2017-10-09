import { QueueService, common, services } from 'azure-storage';

export class AzureQueue {
    constructor(protected service: QueueService, protected queue: string) { }

    public getMessage() {
        return new Promise((resolve, reject) =>
            this.service.getMessage(this.queue, (err, result) => 
                err ? reject(err) : resolve(result)));
    }

    public deleteMessage(msg: QueueService.QueueMessageResult) {
        return new Promise((resolve, reject) =>
            this.service.deleteMessage(this.queue, msg.messageId, msg.popReceipt, (err, result) =>
                err ? reject(err) : resolve(result)));
    }
}