export const Task {
  constructor(name, duration, urgency) {
    this.name = this.validateInput(name, "string");
    this.duration = this.validateInput(duration, "number");
    this.urgency = //this.validateInput(urgency, "string", ["high", ,"low"];
    this.timeLeft = duration;
  }
  
  validateInput(input, type, values=null) {
    if(!["string", "number"].includes(type.toLowerCase())) {
      throw new Error('"type" not recognized');
    } else {
      if(typeof input !== type) {
        throw new Error(`"input" not of type ${type}`);
      } else {
        if(values) {
          if(!values.isArray()) {
            throw new Error('"values" must be an array'); 
          } else {
            if(!values.includes(input) {
              throw new Error("Non-valid input"); 
            } else {
              return input; 
            }
          }
        } else {
         return input; 
        }
      }
    }
  }

}
