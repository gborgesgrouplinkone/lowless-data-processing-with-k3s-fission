import { Injectable } from '@nestjs/common';
import { IMainService } from './imain.import';
import { MainParameter } from './dto/main.parameter';

@Injectable()
export class MainService implements IMainService{
    execute(parameter: MainParameter): Promise<any> {
        return {
            data: true
        } as any
    }
}