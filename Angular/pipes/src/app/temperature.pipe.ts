import { output, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number | null, inputType: 'cel' | 'far', outputType?: 'cel' | 'far'): unknown {
    if(!value){
      return value
    }

    let val: number;

    if (typeof value === 'string'){
      val = parseFloat(value)
    } else {
      val = value;
    }

    let outputTemperature: number

    if (inputType === 'cel' && outputType === 'far'){
      outputTemperature = val * (9/5) + 32
    } else if (inputType === 'far' && outputType === 'cel'){
      outputTemperature = (val - 32) * (5/9)
    } else {
      outputTemperature = val;
    }

    let symbol: '°C' | '°F'

    if(!outputType){
      symbol = inputType === 'cel' ? '°C' : '°F'
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F'
    }

    return `${outputTemperature.toFixed(2)} ${symbol}`;
  }
}