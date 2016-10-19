import {Pipe, PipeTransform} from '@angular/core';
import {Cd} from './cd.model';

@Pipe({
  name: "artist",
  pure: false
})
  export class ArtistPipe implements PipeTransform {
    transform(input: Cd [], desiredArtist) {
      var output: Cd [] = [];
      if(desiredArtist !== "all"){
        if (desiredArtist === "Pink Floyd") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].artist === "Pink Floyd") {
              output.push(input[i]);
            }
          }
        }
        if (desiredArtist === "Grateful Dead") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].artist === "Grateful Dead") {
              output.push(input[i]);
            }
          }
        }
        if (desiredArtist === "Hella") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].artist === "Hella") {
              output.push(input[i]);
            }
          }
        }
        if (desiredArtist === "Grails") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].artist === "Grails") {
              output.push(input[i]);
            }
          }
        }
        if (desiredArtist === "Busdriver") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].artist === "Busdriver") {
              output.push(input[i]);
            }
          }
        }
        if (desiredArtist === "Aesop Rock") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].artist === "Aesop Rock") {
              output.push(input[i]);
            }
          }
        }
        if (desiredArtist === "Bjork") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].artist === "Bjork") {
              output.push(input[i]);
            }
          }
        }
        if (desiredArtist === "Mike Patton") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].artist === "Mike Patton") {
              output.push(input[i]);
            }
          }
        }
        if (desiredArtist === "Secret Chiefs 3") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].artist === "Secret Chiefs 3") {
              output.push(input[i]);
            }
          }
        }
        if (desiredArtist === "Estradasphere") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].artist === "Estradasphere") {
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
