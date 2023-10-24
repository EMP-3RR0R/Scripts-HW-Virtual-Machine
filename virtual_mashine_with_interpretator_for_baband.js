memory = new Array(110);
ip = 0;

fso = new ActiveXObject("Scripting.FileSystemObject");
text_prog = fso.OpenTextFile("nod.txt");
var s = ""
while(!text_prog.AtEndOfStream) s += text_prog.ReadLine() + " ";
memory = s.split(" ");
text_prog.close();

while (true)
{
	if (memory[ip] == '.') break;
	switch (memory[ip])
	{
		case "var":
			memory[memory[ip+1]] = memory[ip+2];
			ip += 3;
			break;
		case "+": 
			memory[memory[ip+3]] = memory[memory[ip+1]] + memory[memory[ip+2]]; 
			ip += 4;
			break;
		case "++": 
			memory[memory[ip+1]] += memory[ip+2]; 
			ip += 3;
			break;
		case "-": 
			memory[memory[ip+3]] = memory[memory[ip+1]] - memory[memory[ip+2]]; 
			ip += 4;
			break;
		case "--": 
			memory[memory[ip+1]] -= memory[ip+2]; 
			ip += 3;
			break;
		case "*": 
			memory[memory[ip+3]] = memory[memory[ip+1]] * memory[memory[ip+2]]; 
			ip += 4;
			break;
		case "**": 
			memory[memory[ip+1]] *= memory[ip+2]; 
			ip += 3;
			break;
		case "|": 
			memory[memory[ip+3]] = memory[memory[ip+1]] / memory[memory[ip+2]]; 
			ip += 4;
			break;
		case "||": 
			memory[memory[ip+1]] /= memory[ip+2]; 
			ip += 3;
			break;
		case "/": 
			memory[memory[ip+3]] = memory[memory[ip+1]] % memory[memory[ip+2]]; 
			ip += 4;
			break;
		case "//": 
			memory[memory[ip+1]] %= memory[ip+2]; 
			ip += 3;
			break;
		case "console.input": 
			let i = prompt("Give me a value");
			memory[memory[ip+1]] = i;
			ip += 2;	
			break;
		case "console.output": 
			WScript.echo(memory[memory[ip+1]]);
			ip += 2;
			break; 
		case "=":
			if (memory[memory[ip+1]] == memory[memory[ip+2]]) memory[memory[ip+3]] = 1;
			else memory[memory[ip+3]] = 0;
			ip += 4;
			break;
		case "==":
			if (memory[memory[ip+1]] == memory[ip+2]) memory[memory[ip+3]] = 1;
			else memory[memory[ip+3]] = 0;
			ip += 4;
			break;
		case "!=":
			if (memory[memory[ip+1]] != memory[memory[ip+2]]) memory[memory[ip+3]] = 1;
			else memory[memory[ip+3]] = 0;
			ip += 4;
			break;
		case "!==":
			if (memory[memory[ip+1]] != memory[ip+2]) memory[memory[ip+3]] = 1;
			else memory[memory[ip+3]] = 0;
			ip += 4;
			break;
		case "<":
			if (memory[memory[ip+1]] < memory[memory[ip+2]]) memory[memory[ip+3]] = 1;
			else memory[memory[ip+3]] = 0;
			ip += 4;
			break;
		case "<<":
			if (memory[memory[ip+1]] < memory[ip+2]) memory[memory[ip+3]] = 1;
			else memory[memory[ip+3]] = 0;
			ip += 4;
			break;
		case "<=":
			if (memory[memory[ip+1]] <= memory[memory[ip+2]]) memory[memory[ip+3]] = 1;
			else memory[memory[ip+3]] = 0;
			ip += 4;
			break;
		case "<<=":
			if (memory[memory[ip+1]] <= memory[ip+2]) memory[memory[ip+3]] = 1;
			else memory[memory[ip+3]] = 0;
			ip += 4;
			break; 
		case ">":
			if (memory[memory[ip+1]] > memory[memory[ip+2]]) memory[memory[ip+3]] = 1;
			else memory[memory[ip+3]] = 0;
			ip += 4;
			break;
		case ">>":
			if (memory[memory[ip+1]] > memory[ip+2]) memory[memory[ip+3]] = 1;
			else memory[memory[ip+3]] = 0;
			ip += 4;
			break;
		case ">=":
			if (memory[memory[ip+1]] >= memory[memory[ip+2]]) memory[memory[ip+3]] = 1;
			else memory[memory[ip+3]] = 0;
			ip += 4;
			break;
		case ">>=":
			if (memory[memory[ip+1]] >= memory[ip+2]) memory[memory[ip+3]] = 1;
			else memory[memory[ip+3]] = 0;
			ip += 4;
			break; 
		case "goto": 
			ip = memory[ip+1];
			break;
		case "if":
			if (memory[memory[ip+1]] == 1) ip += 3;
			else ip = ip + 3 + memory[ip+2];
			break;
		case "swap":
			memory[memory[ip+1]] = memory[memory[ip+2]] + memory[memory[ip+1]];
			memory[memory[ip+2]] = memory[memory[ip+1]] - memory[memory[ip+2]];
			memory[memory[ip+1]] = memory[memory[ip+1]] - memory[memory[ip+2]];
			ip += 3;
			break;
	}
}
