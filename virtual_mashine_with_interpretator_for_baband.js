memory = new Array(110);
ip = 0;

file = WScript.StdIn.Readline();

fso = new ActiveXObject("Scripting.FileSystemObject");
text_prog = fso.OpenTextFile(file);
var s = "";
while(!text_prog.AtEndOfStream) s += text_prog.ReadLine() + " ";
memory = s.split(" ");
text_prog.close();
flag = false;

while (true)
{
	if (memory[ip] == '.' || flag) break;
	switch (memory[ip])
	{
		case "var":
			memory[memory[ip+1]] = Number(memory[ip+2]);
			ip += 3;
			break;
		case "+": 
			memory[memory[ip+3]] = memory[memory[ip+1]] + memory[memory[ip+2]]; 
			ip += 4;
			break;
		case "++": 
			memory[memory[ip+1]] += Number(memory[ip+2]); 
			ip += 3;
			break;
		case "-": 
			memory[memory[ip+3]] = memory[memory[ip+1]] - memory[memory[ip+2]]; 
			ip += 4;
			break;
		case "--": 
			memory[memory[ip+1]] -= Number(memory[ip+2]); 
			ip += 3;
			break;
		case "*": 
			memory[memory[ip+3]] = memory[memory[ip+1]] * memory[memory[ip+2]];
			ip += 4;
			break;
		case "**": 
			memory[memory[ip+1]] *= Number(memory[ip+2]); 
			ip += 3;
			break;
		case "|": 
			memory[memory[ip+3]] = memory[memory[ip+1]] / memory[memory[ip+2]]; 
			ip += 4;
			break;
		case "||": 
			memory[memory[ip+1]] /= Number(memory[ip+2]); 
			ip += 3;
			break;
		case "/": 
			memory[memory[ip+3]] = memory[memory[ip+1]] % memory[memory[ip+2]]; 
			ip += 4;
			break;
		case "//": 
			memory[memory[ip+1]] %= Number(memory[ip+2]); 
			ip += 3;
			break;
		case "console.input": 
			memory[memory[ip+1]] = WScript.StdIn.Readline();
			if (memory[memory[ip+1]] < 0)
			{
				WScript.echo("Enter a non-negative number");
				break;
			}
			if (memory[memory[ip+1]] % 1 != 0)
			{
				WScript.echo("Enter a non-fractional number");
				break;
			}
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
			case "!0":
				if (memory[memory[ip+1]] == memory[memory[ip+2]] && memory[memory[ip+1]] == 0)
				{
					WScript.echo("Enter not two zeros");
					flag = true;
				}
				ip+=3;
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
			ip = Number(memory[ip+1]);
			break;
		case "if":
			if (memory[memory[ip+1]] == 1) ip += 3;
			else ip = ip + 3 + Number(memory[ip+2]);
			break;
		case "swap":
			memory[memory[ip+1]] = memory[memory[ip+2]] + memory[memory[ip+1]];
			memory[memory[ip+2]] = memory[memory[ip+1]] - memory[memory[ip+2]];
			memory[memory[ip+1]] = memory[memory[ip+1]] - memory[memory[ip+2]];
			ip += 3;
			break;
	}
}