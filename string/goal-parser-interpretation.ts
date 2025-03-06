function interpret(command: string): string {
    let result: string = "";

    while(command.length > 0) {
        if (command.startsWith("G")) {
            result += "G";
            command = command.substring(1);        
        } 
        if (command.startsWith("(al)")) {
            result += "al";
            command = command.substring(4);        
        }
        if (command.startsWith("()")) {
            result += "o";
            command = command.substring(2);        
        }
    }

    return result;
};