#include<stdio.h>
#include<unistd.h>
#include<fcntl.h>

main(int argc, char *argv[])

{

int ifd, ofd, pipefd[2];

printf("Process' File Descritor Table \n");
print ("---------------------------------------------");
printf("Descritor\t Pointer\t Description\n");
printf ("--------------------------------------------")
printf ("%sd\t\t %p ------ > Terminal's Input Device\n", STDIN _FILENO, stdin);

printf ("%sd\t\t %p ------ > Terminal's Output Device\n", STDOUT  FILENO, stdout);
printf("%sd\t\t %p ------ > Terminal's Error Device\n", STDERR FILENO, stderr);

/* Create two files, one input and one output */

ifd = open("in.txt",0 RDONLY);

ofd = open("out.txt",0 WRONLY);

printf ("%d\t\t %p ------ > File in.txt\n", ifd, fdopen(ifd,"r"));
printf("%d\t\t %p ------ > File out.txt\n", ofd, fdopen(ofd,"w"));

/* Create a pipe */

pipe(pipefd);
printf ("%d\t\t %p ------ > Pipe's Read End\n", pipefd[0], fdopen(pipefd[@],"r"));
printf ("%d\t\t %p ------ > Pipe's Write End\n", pipefd[1], fdopen(pipefd[1],"w"));
}