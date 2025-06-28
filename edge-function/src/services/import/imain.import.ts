import { MainParameter } from "./dto/main.parameter";

export interface IMainService {
    execute(parameter: MainParameter) : Promise<any>
}