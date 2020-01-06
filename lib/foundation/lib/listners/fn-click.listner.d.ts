import { FnExceptionService } from '../exception/fn-exception.service';
export declare abstract class FnClickListner {
    private excptionSvcs;
    constructor(excptionSvcs: FnExceptionService);
    click(eventId: string, ...restParams: any[]): void;
    abstract execute(eventId: string, restParams: any): any;
}
