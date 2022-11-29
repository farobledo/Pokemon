export function validate (input) {
      let errors = {};
      if(!input.name) {
       
        errors.name = 'Se requiere el nombre' 
      } else if(!/^[a-z]+$/i.test(input.name)) {
        errors.name = 'El nombre no es válido (A-Z or a-Z)'
        
      };
      if(!input.atack) {
        errors.atack = 'Se requiere ataque' 
      } else if(!/^([1-9][0-9]{0,2}|1000)$/i.test(input.atack)) {
        errors.atack = 'La defensa no es válida (0-1000)'
      };
      if(!input.defense) {
        errors.defense = 'Defense is required' 
      } else if(!/^([1-9][0-9]{0,2}|1000)$/i.test(input.defense)) {
        errors.defense = 'Defense is invalid (0-1000)'
      };
      if(!input.height) {
        errors.height = 'Se requiere altura' 
      } else if(!/^([1-9][0-9]{0,2}|1000)$/i.test(input.height)) {
        errors.height = 'La altura no es válida (0-1000)'
      };
      if(!input.weight) {
        errors.weight = 'Se requiere peso' 
      } else if(!/^([1-9][0-9]{0,2}|1000)$/i.test(input.weight)) {
        errors.weight = ' El peso no es válido (0-1000)'
      };
      if(!input.life) {
        errors.life = 'Se requiere vida' 
      } else if(!/^([1-9][0-9]{0,2}|1000)$/i.test(input.life)) {
        errors.life = 'La vida no es válida(0-1000)'
      };
      if(!input.speed) {
        errors.speed = 'Se requiere velocidad' 
      } else if(!/^([1-9][0-9]{0,2}|1000)$/i.test(input.speed)) {
        errors.speed = 'La velocidad no es válida (0-1000)'
      };
      if(input.type.length === 0) {
        console.log('Entre aca no se por que');
        errors.type = 'Se requiere mínimo 1 tipo'
      }
      return errors
  }