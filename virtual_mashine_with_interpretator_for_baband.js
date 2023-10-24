memory = new Array(110);
ip = 0;

  var FSO = new ActiveXObject("Scripting.FileSystemObject");
  f = FSO.OpenTextFile("C:\\Users\\Андрей\\Desktop\\BABAND скрипты\\factorial.txt", 1);
  var fileContent = f.ReadAll();
  f.close();

words = fileContent.split();
for (var i = 0; i < words.length; i++) memory[i] = words[i];

while (true)
{
	if (memory[i] == '.') break;
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
			memory[memory[ip+1]] = WScript.StdIn.ReadLine();
			break;
			ip += 2;	
		case "console.output": 
			WScript.echo(memory[memory[ip+1]]);
			break;
			ip += 2;
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