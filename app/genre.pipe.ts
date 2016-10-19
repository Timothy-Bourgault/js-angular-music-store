import {Pipe, PipeTransform} from '@angular/core';
import {Cd} from './cd.model';

@Pipe({
  name: "genre",
  pure: false
})
  export class GenrePipe implements PipeTransform {
    transform(input: Cd [], desiredGenre) {
      var output: Cd [] = [];
      if(desiredGenre !== "all"){
        if (desiredGenre === "AGR") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].genre === "Avant-Garde-Rap") {
              output.push(input[i]);
            }
          }
        }
        if (desiredGenre === "PR") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].genre === "Psychadelic-Rock") {
              output.push(input[i]);
            }
          }
        }
        if (desiredGenre === "PP") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].genre === "Post-Psychadelic") {
              output.push(input[i]);
            }
          }
        }
        if (desiredGenre === "AE") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].genre === "Accapella-Experimental") {
              output.push(input[i]);
            }
          }
        }
        if (desiredGenre === "CFAGM") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].genre === "Cinimatic-Folk-Avant-Garde-Metal") {
              output.push(input[i]);
            }
          }
        }

        return output;
      }
      else{
        return input;
      }
    }
  }
