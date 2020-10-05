# caesar-cipher-cli
Keep your secrets with a classical Caesar cypher!

# How to install
1. Download the app from the repository.
2. Go to the app folder.
3. Run "npm install" or "npm i" in the command line to install the dependencies.

# How to use
After the installation in the app folder enter "node caesar-cli [options]" in the command line where options are command line parameters (alias and full name):

    -s, --shift: a shift
    -i, --input: an input file
    -o, --output: an output file
    -a, --action: an action encode/decode

**Action** can be either encode or decode. **Shift** must be a positive integer, it indicates the shift of letters.

***Important!*** **Action** and **shift** are mandatory.

**Input** and **output** can contain either a relative or an absolute path to the file or a file name if it's in the app root folder.
If the input and/or output file is missing, you can write in the command line and see the output there. To stop the process, press Ctrl+C.

# Examples
$ node caesar-cli -a encode -s 3 -i in.txt -o out.txt

*in.txt* ...recorded the sound of two black holes colliding 1 billion years ago! Правда.

*out.txt* ...uhfrughg wkh vrxqg ri wzr eodfn krohv froolglqj 1 eloolrq bhduv djr! Правда.

-----------------------------------------------------------------------------------------

$ node caesar-cli --action decode --shift 15

*you can enter in the command line...* ctl ntpg 2021

*...and get there* new year 2021

-----------------------------------------------------------------------------------------

$ node caesar-cli --action decode --shift 22 --input C:/Users/Julia/Documents/prgr/rss-node/in.txt

*in.txt* De, iu jwia eo Uqheuw!

*in the command line you'll get* Hi, my name is Yuliya!

**Enjoy the cypher!!**







