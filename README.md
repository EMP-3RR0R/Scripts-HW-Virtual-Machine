.	Завершает выполнение программы.

console.input <адрес ячейки памяти>	Используется для ввода значения. Значение, передаваемое пользователем в консоли, сохраняется в ячейке памяти, обозначенной в качестве аргумента. Не принимает отрицательные и дробные числа. Пример использования:
console.input 100 - данная строка записывает значение, переданное пользователем в консоли, в ячейку памяти с адресом 100.

console.output <адрес ячейки памяти>	Используется для вывода значения, записанного в ячейке памяти, обозначенной в качестве аргумента. Пример использования:
console.output 100 - данная строка выводит в консоль значение, записанное в ячейку памяти с адресом 100.

var <адрес ячейки памяти> <значение>	Используется для записи в ячейку с адресом, передаваемым в первом аргументе, значения, передаваемого во втором аргументе. Пример использования:
var 100 5 - данная строка записывает значение 5 в ячейку памяти с адресом 100.

+ <адрес ячейки памяти 1> <адрес ячейки памяти 2> <адрес ячейки памяти 3>	Используется для суммирования значений, записанных по адресам, обозначенным в первом и втором аргументах. Полученный результат записывается в ячейку с адресом, обозначенным в третьем аргументе. Пример использования:
+ 100 101 102 - данная строка суммирует значения, записанные в ячейки памяти с адресами 100 и 101 (например, в 100 записана 1, в 101 записана 2), и записывает результат в ячейку памяти с адресом 102 (с заданными ранее значениями у ячеек с адресами 100 и 101 в 102 запишется значение 3).

++ <адрес ячейки памяти 1> <значение>	Используется для прибавления некоторого значения, передаваемого вторым аргументом, к значению, записанному в ячейке памяти с адресом, передаваемым первым аргументом. Результат записывается в ту же ячейку, адрес которой передан в первом аргументе. Пример использования:
++ 100 10 - данная строка прибавляет 10 к значению, записанному в ячейке с адресом 100, и переписывает значение ячейки 100 на результат этой суммы.

- <адрес ячейки памяти 1> <адрес ячейки памяти 2> <адрес ячейки памяти 3>	Используется для вычитания значения, записанного по адресу, обозначенному во втором аргументе, из значения, записанного по адресу, обозначенному в первом аргументе. Полученный результат записывается в ячейку с адресом, обозначенным в третьем аргументе. Пример использования:
- 100 101 102 - данная строка вычитает значение, записанное в ячейке памяти с адресом 101 (например, 2) из значения, записанного в ячейке памяти с адресом 100 (например, 5), и записывает результат в ячейку памяти с адресом 102 (с заданными ранее значениями у ячеек 100 и 101 в 102 запишется значение 3).

-- <адрес ячейки памяти 1> <значение>	Используется для вычитания некоторого значения, передаваемого вторым аргументом, из значения, записанного в ячейке памяти с адресом, передаваемым первым аргументом. Результат записывается в ту же ячейку, адрес которой передан в первом аргументе. Пример использования:
-- 100 10 - данная строка вычитает 10 из значения, записанного в ячейке с адресом 100, и переписывает значение ячейки 100 на результат этой разности.

* <адрес ячейки памяти 1> <адрес ячейки памяти 2> <адрес ячейки памяти 3>	Используется для умножения значений, записанных по адресам, обозначенным в первом и втором аргументах. Полученный результат записывается в ячейку с адресом, обозначенным в третьем аргументе. Пример использования:
* 100 101 102 - данная строка умножает значения, записанные в ячейки памяти с адресами 100 и 101 (например, в 100 записана 2, в 101 записана 3), и записывает результат в ячейку памяти с адресом 102 (с заданными ранее значениями у ячеек с адресами 100 и 101 в 102 запишется значение 6).

** <адрес ячейки памяти 1> <значение>	Используется для умножения некоторого значения, передаваемого вторым аргументом, на значение, записанное в ячейке памяти с адресом, передаваемым первым аргументом. Результат записывается в ту же ячейку, адрес которой передан в первом аргументе. Пример использования:
** 100 10 - данная строка умножает на 10 значение, записанное в ячейке с адресом 100, и переписывает значение ячейки 100 на результат этого произведения.

| <адрес ячейки памяти 1> <адрес ячейки памяти 2> <адрес ячейки памяти 3>	Используется для целочисленного деления значения, записанного по адресу, обозначенному в первом аргументе, на значения, записанное по адресу, обозначенному во втором аргументе. Полученный результат записывается в ячейку с адресом, обозначенным в третьем аргументе. Пример использования:
| 100 101 102 - данная строка выполняет целочисленное деление значения, записаннго в ячейке памяти с адресом 100 (например, 10) на значение, записанное в ячейке памяти с адресом 101 (например, 3), и записывает результат в ячейку памяти с адресом 102 (с заданными ранее значениями у ячеек 100 и 101 в 102 запишется значение 3).

|| <адрес ячейки памяти 1> <значение>	Используется для целочисленного деления некоторого значения, передаваемого вторым аргументом, на значение, записанное в ячейке памяти с адресом, передаваемым первым аргументом. Результат записывается в ту же ячейку, адрес которой передан в первом аргументе. Пример использования:
|| 100 10 - данная строка выполняет целочисленное деление на 10 значения, записанного в ячейке с адресом 100, и переписывает значение ячейки 100 на результат этого деления.

/ <адрес ячейки памяти 1> <адрес ячейки памяти 2> <адрес ячейки памяти 3>	Используется для нахождения остатка от деления значения, записанного по адресу, обозначенному в первом аргументе, на значения, записанное по адресу, обозначенному во втором аргументе. Полученный результат записывается в ячейку с адресом, обозначенным в третьем аргументе. Пример использования:
/ 100 101 102 - данная строка выполняет нахождение остатка от деления значения, записаннго в ячейке памяти с адресом 100 (например, 10) на значение, записанное в ячейке памяти с адресом 101 (например, 3), и записывает результат в ячейку, памяти с адресом 102 (с заданными ранее значениями у ячеек 100 и 101 в 102 запишется значение 1).

// <адрес ячейки памяти 1> <значение>	Используется для нахождения остатка от деления некоторого значения, передаваемого вторым аргументом, на значение, записанного в ячейке памяти с адресом, передаваемым первым аргументом. Результат записывается в ту же ячейку, адрес которой передан в первом аргументе. Пример использования:
// 100 10 - данная строка находит остаток от деления на 10 значения, записанного в ячейке с адресом 100, и переписывает значение ячейки 100 на результат поиска.

= <адресы ячейки памяти 1> <адрес ячейки памяти 2> <адрес ячейки памяти 3>	Используется для проверки значения, записанного в ячейке памяти с адресом, передаваемым первым аргументом, на то, равно ли оно значению, записанному в ячейке памяти с адресом, передаваемым вторым аргументом. В случае истинности записывает 1 в ячейку памяти с адресом, передаваемым третьим аргументом, иначе записывает в эту же ячейку 0. Примеры использования:
= 100 101 102 - данная строка берет значение, находящееся в ячейке с адресом 100, проверяет, равно ли оно значению в ячейке памяти с адресом 101, и в случае, если значение 100 равно значению 101, записывает в ячейку памяти с адресом 102 1, иначе записывает 0.

== <адрес ячейки памяти 1> <значение> <адрес ячейки памяти 3>	Используется для проверки значения, записанного в ячейке с адресом, передаваемым первым аргументом, на то, равно ли оно значению, передаваемому вторым аргументом. Если равенство истинно, то в ячейку с адресом, передаваемым третьим аргументом, записывается 1, иначе 0. Пример использования:
<< 100 10 101 - данная строка проверяет равно ли значение в ячейке 100 числу 10, если равно, то записывает в 101 единицу, иначе записывает 0.

!= <адресы ячейки памяти 1> <адрес ячейки памяти 2> <адрес ячейки памяти 3>	Используется для проверки значения, записанного в ячейке памяти с адресом, передаваемым первым аргументом, на то, неравно ли оно значению, записанному в ячейке памяти с адресом, передаваемым вторым аргументом. В случае истинности записывает 1 в ячейку памяти с адресом, передаваемым третьим аргументом, иначе записывает в эту же ячейку 0. Примеры использования:
= 100 101 102 - данная строка берет значение, находящееся в ячейке с адресом 100, проверяет, неравно ли оно значению в ячейке памяти с адресом 101, и в случае, если значение 100 неравно значению 101, записывает в ячейку памяти с адресом 102 1, иначе записывает 0.

!== <адрес ячейки памяти 1> <значение> <адрес ячейки памяти 3>	Используется для проверки значения, записанного в ячейке с адресом, передаваемым первым аргументом, на то, неравно ли оно значению, передаваемому вторым аргументом. Если неравенство истинно, то в ячейку с адресом, передаваемым третьим аргументом, записывается 1, иначе 0. Пример использования:
<< 100 10 101 - данная строка проверяет неравно ли значение в ячейке 100 числу 10, если неравно, то записывает в 101 единицу, иначе записывает 0.

!0 <адрес ячейки памяти 1> <адрес ячейки памяти 2>	Используется для проверки ввода на то, не равны ли оба введенных значений 0. В случае равенства 0 заканчивает программу с выводом ошибки, иначе продолжает программу.

< <адресы ячейки памяти 1> <адрес ячейки памяти 2> <адрес ячейки памяти 3>	Используется для проверки значения, записанного в ячейке памяти с адресом, передаваемым первым аргументом, на то, меньше ли оно значения, записанного в ячейке памяти с адресом, передаваемым вторым аргументом. В случае истинности записывает 1 в ячейку памяти с адресом, передаваемым третьим аргументом, иначе записывает в эту же ячейку 0. Примеры использования:
< 100 101 102 - данная строка берет значение, находящееся в ячейке с адресом 100, проверяет, меньше ли оно значения в ячейке памяти с адресом 101, и в случае, если значение 100 меньше значения 101, записывает в ячейку памяти с адресом 102 1, иначе записывает 0.

<< <адрес ячейки памяти 1> <значение> <адрес ячейки памяти 3>	Используется для проверки значения, записанного в ячейке с адресом, передаваемым первым аргументом, на то, меньше ли оно значения, передаваемого вторым аргументом. Если неравенство истинно, то в ячейку с адресом, передаваемым третьим аргументом, записывается 1, иначе 0. Пример использования:
<< 100 10 101 - данная строка проверяет меньше ли значение в ячейке 100 числа 10, если меньше, то записывает в 101 единицу, иначе записывает 0.

<= <адресы ячейки памяти 1> <адрес ячейки памяти 2> <адрес ячейки памяти 3>	Используется для проверки значения, записанного в ячейке памяти с адресом, передаваемым первым аргументом, на то, меньше или равно ли оно значения, записанного в ячейке памяти с адресом, передаваемым вторым аргументом. В случае истинности записывает 1 в ячейку памяти с адресом, передаваемым третьим аргументом, иначе записывает в эту же ячейку 0. Примеры использования:
<= 100 101 102 - данная строка берет значение, находящееся в ячейке с адресом 100, проверяет, меньше или равно ли оно значения в ячейке памяти с адресом 101, и в случае, если значение 100 меньше или равно значения 101, записывает в ячейку памяти с адресом 102 1, иначе записывает 0.

<<= <адрес ячейки памяти 1> <значение> <адрес ячейки памяти 3>	Используется для проверки значения, записанного в ячейке с адресом, передаваемым первым аргументом, на то, меньше или равно ли оно значения, передаваемого вторым аргументом. Если неравенство истинно, то в ячейку с адресом, передаваемым третьим аргументом, записывается 1, иначе 0. Пример использования:
< 100 10 101 - данная строка проверяет меньше или равно ли значение в ячейке 100 числа 10, если меньше или равно, то записывает в 101 единицу, иначе записывает 0.

> <адресы ячейки памяти 1> <адрес ячейки памяти 2> <адрес ячейки памяти 3>	Используется для проверки значения, записанного в ячейке памяти с адресом, передаваемым первым аргументом, на то, больше ли оно значения, записанного в ячейке памяти с адресом, передаваемым вторым аргументом. В случае истинности записывает 1 в ячейку памяти с адресом, передаваемым третьим аргументом, иначе записывает в эту же ячейку 0. Примеры использования:
> 100 101 102 - данная строка берет значение, находящееся в ячейке с адресом 100, проверяет, больше ли оно значения в ячейке памяти с адресом 101, и в случае, если значение 100 больше значения 101 записывает в ячейку памяти с адресом 102 1, иначе записывает 0.

>> <адрес ячейки памяти 1> <значение> <адрес ячейки памяти 3>	Используется для проверки значения, записанного в ячейке с адресом, передаваемым первым аргументом, на то, больше ли оно значения, передаваемого вторым аргументом. Если неравенство истинно, то в ячейку с адресом, передаваемым третьим аргументом, записывается 1, иначе 0. Пример использования:
>> 100 10 101 - данная строка проверяет больше ли значение в ячейке 100 числа 10, если больше, то записывает в 101 единицу, иначе записывает 0.\

>= <адресы ячейки памяти 1> <адрес ячейки памяти 2> <адрес ячейки памяти 3>	Используется для проверки значения, записанного в ячейке памяти с адресом, передаваемым первым аргументом, на то, больше или равно ли оно значения, записанного в ячейке памяти с адресом, передаваемым вторым аргументом. В случае истинности записывает 1 в ячейку памяти с адресом, передаваемым третьим аргументом, иначе записывает в эту же ячейку 0. Примеры использования:
>= 100 101 102 - данная строка берет значение, находящееся в ячейке с адресом 100, проверяет, больше или равно ли оно значения в ячейке памяти с адресом 101, и в случае, если значение 100 больше или равно значения 101, записывает в ячейку памяти с адресом 102 1, иначе записывает 0.

>>= <адрес ячейки памяти 1> <значение> <адрес ячейки памяти 3>	Используется для проверки значения, записанного в ячейке с адресом, передаваемым первым аргументом, на то, больше или равно ли оно значения, передаваемого вторым аргументом. Если неравенство истинно, то в ячейку с адресом, передаваемым третьим аргументом, записывается 1, иначе 0. Пример использования:
>>= 100 10 101 - данная строка проверяет больше или равно ли значение в ячейке 100 числа 10, если больше или равно, то записывает в 101 единицу, иначе записывает 0.

swap <адресы ячейки памяти 1> <адрес ячейки памяти 2>	Используется для обмена значениями ячеек памяти, адресы которых передаются первым и вторым аргументом. Пример использования:
swap 100 101 - данная строка обменивает значения, записанные в ячейках 100 и 101.

goto <адрес ячейки памяти>	Используется для перехода на ячейку с адресом, указанным в качестве аргумента. Пример использования:
goto 0 - программа переходит на ячейку памяти с адресом 0, т.е. начинает программу с начала.

if <адрес ячейки памяти> <количество шагов>	Используется для проверки истинности значения в ячейке памяти, адрес которой передается в качестве первого аргумента. В случае истинности значения программа продолжает выполнение, иначе делает пропуск указанного вторым аргументом шагов выполнения. Совместно с goto и шагом 2 составляют конструкцию условного перехода. Пример использования:
if 100 2 - данная строка проверяет истинность значения, записанного в ячейке памяти с адресом 100. В случае истинности программа продолжает выполнение, иначе пропускает два следующих шага.
