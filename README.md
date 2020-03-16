# nicolas42.github.io

<!DOCTYPE HTML>

Syntax highlighting in nano
There's a bunch of syntax files in /usr/share/nano which can be inserted into the ~/.nanorc file
for syntax highlighting in nano :)

echo "" > ~/.nanorc;
for f in $(ls /usr/share/nano/*.nanorc); do
	echo "include $f" >> ~/.nanorc;
done


LLVM
LLVM IR tutorial https://www.youtube.com/watch?v=m8G_S5LwlTo
llvm IR examples https://releases.llvm.org/2.6/docs/tutorial/JITTutorial1.html
llvm IR lecture 2017 https://llvm.org/devmtg/2017-06/1-Davis-Chisnall-LLVM-2017.pdf
Virtualbox and OSBoxes.org

There's a number of preinstalled virtualbox images at the website osboxes.org
https://www.osboxes.org/virtualbox-images/


A virtualbox image can be converted onto an iso then flashed to a hard drive

VBoxManage clonehd file.vdi output.iso --format RAW 
dd if=output.iso of=/dev/sdX
Autohotkey
capslock to enter
https://www.autohotkey.com/docs/misc/Remap.htm
SetCapsLockState, AlwaysOff
CapsLock::Enter


Debian in Vritualbox
To get debian guest additions working in virtualbox install guest-additions and module-assistant
possibly build-essential and linux-header
then virtually insert the CD and run the appropriate script
it might be necessary to copy over the files to a folder make the appropriate script executable then run it with sh <script>
https://www.youtube.com/watch?v=VvnnNfGvdc0

Don't automatically login to desktop environment (Toggle display manager autologin)
https://unix.stackexchange.com/questions/264393/how-to-disable-x-server-autostart-in-debian-jessie
In order to make text boot the default under systemd (regardless of which distro, really):
systemctl set-default multi-user.target
To change back to booting to the GUI,
systemctl set-default graphical.target

systemd
The system daemon is now used (2020) so a bunch of commands use 
systemctl; for example systemctl reboot 

keyboard remapping with xmodmap and xev
https://www.youtube.com/watch?v=kJz7uKDyZjs
use xev to see what the keycodes and names are for various keys then use xmodmap to map a keycode to a particular key

xmodmap -e "keycode 66 = Return"

(keycode 66 was capslock on my system).  So when I ran the above code capslock would behave as if it were the return (or enter) key.





knot theory  https://www.reddit.com/r/BetterEveryLoop/comments/fi2rx4/this_is_perfect_for_this_sub/

https://www.pagecloud.com/blog/how-to-edit-your-website
document.body.contentEditable = 'true'; document.designMode='on'; void 0

https://www.reddit.com/r/askmath/



Vonoi Diagram


sqrt(ab) = sqrt(a)sqrt(b)


pauls online math notes algebra  use as structure for teaching  
arithmetic.zetamac.com
khanacademy.com

algebra - etymology
arabic - the reunion of broken parts, al-jabr
the science of restoring what is missing or equating like with like (ilm al-jabr wa'l-muqabala)
=> algorithm







Peter
0406487349
17 Duncan st west end
$320

scott meyers cache prefetching and why you care https://www.youtube.com/watch?v=WDIkqP4JbkE
cache lines are typically 16 integers long (32 bit ints)


c99 metaprogramming
create header files
create namespaces


Biden vs Bernie 2020 - Political Polemic

Money buys things.  It can buy most things.  Maybe not love but it helps confidence.

I don't think we should be surprised that money buys elections.  
The political system largely reflects the economic system with a bit of democracy thrown in here and there.  

$100 democracy dollars per person would be awesome.
Preferential voting is a good fix for the two party system. It means you can actually vote for who you like.
Gerrymandering needs public awareness. Districts that aren't gerrymandered will likely get more political money since they'll be competed for more actively.
A lot of this stuff actually seems like it would be in the best interest of public officials. $100 democracy dollars means more money for candidates. Preferential voting means there's
Say what you will about Trump. His simplistic mantras of "fake news" and "drain the swamp" are catchy ways of describing phenomena of corruption that most people feel are true to one degree or another.
Non-establishment candidates are getting traction because of several decades low median wage growth and high inflation across several sectors. Though you might not like Trump's style and even think he's a big loony at least Republican voters succeeded in voting in a non-establishment candidate. Not sure why, perhaps their electorates are poorer and more desperate on average or perhaps there is a cultural difference. It does seem that for whatever reason the Democrats are more establishment than the Republicans so far at least, which is worrisome.
 
Candidates could receive golden parachutes when they leave office in return for being banned from working in industries that they regulated. Should be an easy sell for the politicians. This one seems complicated to implement but maybe an easy sell for politicians. In fact
Warning: polemic ahead.  There's massive amounts of capital pushing Biden over Bernie.  Yesterday when I read about the primaries all the Biden titles were positive and all the Bernie titles were negative.  It's not state run but it's fairly clear that coverage is bought and sold like a commodity these days.  Not surprising given the financial hardship that news companies find themselves in.  Speaking truth to power is unprofitable because they're the ones who pay you.  And so far there is a small minority of people who consider paying for news coverage. 
I think that I just generally don't trust large institutions anymore.  They're large because they ingest money from as many rich entities as possible so predictably their services benefit those rich entities.  This is so obvious it tires me to write it. 
The only way to fix this situation generally is to somehow flatten income distribution, in my view.
I was a big fan of Andrew Yang.  His solutions were all free market based and seemingly resistant to corruption and capture by government subcontractors.  
Make Systems

cat $0

c(){
    gcc $@ -Isrc -Iinclude -Wall -Wno-unused-result -Wno-unknown-pragmas -Wfatal-errors -fPIC \
    -g -fsanitize=address
}

c -c $(echo src/*.c)
ar rcs lib.a $(ls *.o)
rm *.o

c lib.a exec/multi.c


interesting makefile example https://stackoverflow.com/questions/1814270/gcc-g-option-to-place-all-object-files-into-separate-directory
Good Places to Steal C Code From
rebol github 
red-lang github?
alexeyAB/darknet
pjreddie/darknet
ultralytics/yolov3


 
Grep
usage	
grep "string" FILE_PATTERN

example
grep "main(" *.c

recursive
grep 'main(' * --recursive

Note: Recursive usage seems to need the * file pattern

Foreach in C
#define	FOREACH(n, limit) for (n = 0; n < limit; n++)
 
 
 

Quotes from Elon Musk, Founder & Chief Engneer, SpaceX - SATELLITE 2020 Opening Day Keynote
https://www.youtube.com/watch?v=HPV8Xp3pEpI
If the schedule is long your design is wrong
simply your product as much as possible
don't optimise something that shouldn't exist
try to be less wrong over time
don't join things with different coefficients of thermal expansion (CTE)

Employees should provide evidence of exceptional ability.  
College is not evidence of exceptional ability.  Colleges are for fun and to prove that you can do your chores.

Using ffmpeg to split video files by size
https://superuser.com/questions/650291/how-to-get-video-duration-in-seconds
https://unix.stackexchange.com/questions/1670/how-can-i-use-ffmpeg-to-split-mpeg-video-into-10-minute-chunks

ffmpeg -i input.mp4 -c copy -map 0 -segment_time 00:20:00 -f segment output%03d.mp4
Please note that this does not give you accurate splits, but should fit your needs. It will instead cut at the first frame after the time specified after segment_time, in the code above it would be after the 20 minute mark.
If you find that only the first chunk is playable, try adding -reset_timestamps 1 as mentioned in the comments.
ffmpeg -i input.mp4 -c copy -map 0 -segment_time 00:20:00 -f segment -reset_timestamps 1 output%03d.mp4




Electron Transport Chain
https://www.youtube.com/watch?v=LQmTKxI4Wn4

Quadratic Bezier Curve
Surprisingly the curve that you get from drawing a figure like the one below is a quadratic.
https://www.reddit.com/r/askmath/comments/ffkovq/so_my_grandpa_was_a_math_teacher_and_taught_me_to/
https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Quadratic_curves




Corona Virus
The number of infected people in an epidemic roughly follows an S curve (logistic or sigmoid curve).  

https://www.youtube.com/watch?v=Kas0tIxDvrg
SIR model  https://en.wikipedia.org/wiki/Mathematical_modelling_of_infectious_disease


The growth stage of an epiidemic can be modelled using a compounding time exponential function.
Exponential modelling Example

approx 21000 infected as of March 6
infection rate is ~1.2X per day
when will it infect half the world's population. lets say 4 billion

4e9 = 21e3 * 1.2 ** days

days = Math.log ( 4/21 * 10 ** 6 ) / Math.log (1.2)
>> 66.68044467775108

Approximately 2 months before half the world is infected if exponential.



Corona Virus Fatality Rate by Age

https://arstechnica.com/science/2020/03/dont-panic-the-comprehensive-ars-technica-guide-to-the-coronavirus/#h1


A Better Programming Inferface

function sharing
fast way of trying out functions on code and data

select code
just want things to be faster
and interfaces better

code sharing
share.code

stack exchange
more visual way of coding
ncurses


append uuid to files
GUI prototyping 
ncurses
rebol
electron framework
nodejs
HTML, CSS, javascript




Object Tracking Links
GitHub - ahmetozlu/tensorflow_object_counting_api: 🚀 The TensorFlow Object Counting API is an open source framework built on top of TensorFlow and Keras that makes it easy to develop object counting systems!
https://github.com/ahmetozlu/tensorflow_object_counting_api

object tracking - Google Search
https://www.google.com/search?q=object+tracking&rlz=1C1CHBF_enAU824AU824&oq=object+tracking&aqs=chrome..69i57j69i60l2j69i65j69i60.3159j0j7&sourceid=chrome&ie=UTF-8

Simple object tracking with OpenCV - PyImageSearch
https://www.pyimagesearch.com/2018/07/23/simple-object-tracking-with-opencv/

Papers With Code : Object Tracking
https://paperswithcode.com/task/object-tracking

DeepSORT: Deep Learning to track custom objects in a video
https://nanonets.com/blog/object-tracking-deepsort/












"I Disapprove of What You Say, But I Will Defend to the Death Your Right to Say It." - Rouseau

bitwise atlassian account confluence jira https://bitwiseag.atlassian.net/wiki/spaces/BITWISEAG/overview




Lecture 7 Evidence in favour of psi epistemic hidden variable models Restricted Liouville mechani https://www.youtube.com/watch?v=Z7jA0PwMPtA

how humans broke the game https://www.youtube.com/watch?v=BJzJtm7OfdQ  
human sapiens breeds https://en.wikipedia.org/wiki/Interbreeding_between_archaic_and_modern_humans
electroboom - simple dc motor https://www.youtube.com/watch?v=4CGjs-Z7bDE
Microcosmos - tardigrades https://www.youtube.com/watch?v=kux1j1ccsgg

microbiology, electromagnetism, anthropology

machine learning



BusyBox  https://busybox.net/about.html
Fabrice Bellard's JSLinux https://bellard.org/jslinux/






Windows 10 LTSC
https://www.youtube.com/watch?v=8dyhoh7u8JA
@Shafi Shaikh Google "Windows 10 Download", and the first link will take you to the Microsoft page. It asks for a license for download, but don't worry, you don't need one. Install a user-agent switcher extension for your browser (there are a lot for every browser), choose Mac OS X /Safari user-agent, reload the page, and you can simply select the version and language you want, and it gives you a link for 32bit and 64bit ISO.

o&o shutup
https://www.oo-software.com/en/shutup10
antispy tool for windows 10


Coronavirus
health department australia https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert#travellers-and-visitors
world health organisation https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen
twitter coronavirus search https://twitter.com/search?q=coronavirus%20australia&src=typed_query




28 Feb 2020

c operator precedence https://en.cppreference.com/w/c/language/operator_precedence

jon blows twitch stream https://www.twitch.tv/naysayer88

grid-style PCB soldering example 50 mins https://www.youtube.com/watch?v=_ypW45Y8VSs


Soldering Iron kit $20
https://www.ebay.com.au/itm/Soldering-Iron-Kit-Electric-Welding-Irons-Tool-60W-Adjustable-Temperature-Rework/303320898608?hash=item469f559c30:g:MbgAAOSwc5xdo~bI

digital temperature control but needs power adapter  for AUS power outlet https://www.aliexpress.com/item/4000019437594.html?spm=a2g0o.productlist.0.0.7e7e34523qaMIE&algo_pvid=8bb8de21-17ab-4f65-a438-2c28165af128&algo_expid=8bb8de21-17ab-4f65-a438-2c28165af128-0&btsid=0ab6fa8115828481685546792e5f76&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_



How to create a bootable Ubuntu USB flash drive from terminal?; linux windows
https://askubuntu.com/questions/372607/how-to-create-a-bootable-ubuntu-usb-flash-drive-from-terminal

Shell
$() is a subshell.  you can do functional style programming using $()

for f in $(ls $(pwd)); do echo $f; done
for <>; do <> done
while <>; do <> done
mkdir -p
ls -lR
cp -r
mv
rsync -av <from> <to>
youtube-dl -g
cd $(dirname $0) 
aws s3 sync . s3://yafoo/

gcc -Wall -Wno-unused-result -Wno-unknown-pragmas -Wfatal-errors -fPIC -g -fsanitize=address std=c99 -Isrc -c src/*.c 
gcc -Wall -Wno-unused-result -Wno-unknown-pragmas -Wfatal-errors -fPIC -g -fsanitize=address std=c99 -Isrc -c examples/main.c
gcc -Wall -Wno-unused-result -Wno-unknown-pragmas -Wfatal-errors -fPIC -g -fsanitize=address std=c99 -Isrc *.o
rm *.o
./a.out $@

# Output Shared Object
gcc -std=c99 -pedantic -Wall -Wno-unused-result -Wno-unknown-pragmas -Wfatal-errors -g -fPIC -shared  ../src/mandelbrot.c -o mandelbrot.so   

# Import from Python
from ctypes import *
lib = CDLL("mandelbrot.so", RTLD_GLOBAL)
mandelbrot = lib.mandelbrot
mandelbrot.argtypes = [c_int, c_int, c_double, c_double, c_double, c_double]



Periodically Sync Folder with AWS

https://unix.stackexchange.com/questions/10646/repeat-a-unix-command-every-x-seconds-forever
while true; do echo 'yay'; sleep 1; done

aws s3 sync . s3://yafoo/public/


dir=.
mkdir ~/.nick/
ls -lR $dir > ~/.nick/old

while true; do

#test
#touch yay4 
ls -lR $dir > ~/.nick/new

DIFF=$(diff ~/.nick/old ~/.nick/new) 
if [ "$DIFF" != "" ] 
then
    cp ~/.nick/new ~/.nick/old
    echo "The directory was modified"
    echo $DIFF
    aws s3 sync $dir s3://yafoo/public/
fi

sleep 1;
done


UQ Day 1, 24 Feb 2020

To Do
see if I can go to thursday or friday prac session for elec3400
get 3400 book and notes from last year
3400 revision test 
go to uq innovate, manserg shaw (45)


Subjects
embedded
computer vision
electronics
business


CSSE4011
Needs systems level programming in C, and desktop programming in Python. Most of the assessment in the course is around programming embedded system nodes, using a realtime OS and desktop applications to communicate with these.  You will struggle in this course if you are not a strong programmer.
Note: There is no contact or lab session in weeks 1 to 3. Labs will start in week 4.

The gui code from 3800 might be helpful https://source.eait.uq.edu.au/gitlist/engg3800g02/blob/master/UVDose_gui.py


ELEC3400




UQ Links
Dashboard https://portal.my.uq.edu.au/#/dashboard
UQ Innovate Makerspace https://makerspace.uq.edu.au/
week 1-7 week long break week 8-13 then revision week



how to make a fm transmitter
https://www.youtube.com/watch?v=joFourugXvs
there's an instructables page.  go to jaycar for parts





I've ordered a macbook pro battery which should come within 4 days or so
Macbook pro battery order from ebay https://vod.ebay.com.au/vod/FetchOrderDetails?ViewPaymentStatus&purchaseOrderId=260000458066229



I've set a reminder to go to the thesis information session at the end of the semester in week 12

At the end of each semester the School holds an information session for those students starting their Thesis Project course in the following semester.  The session is designed to give students the opportunity to review the projects being offered and meet prospective supervisors.
Thesis topic selection Sem 1 2020 https://student.eait.uq.edu.au/projects/?semester_id%5B%5D=7020&school_id%5B%5D=itee&q=&sendButton=




23 Feb 2020

ar is used to create libraries (.a files) in linux - multiple .o files

Recursive Copying in Unix
 
cp -r . new
 


http://ergoemacs.org/emacs/emacs.html
How I use Emacs
emacs -nw

Commands use control-x pref or alt-x pref
numbers do windowing, "o" switches to other window

C-x 3
C-x o
M-x term
C-x C-f go to file
C-x C-x save file
C-x left, right
C-x C-b list buffers


C-x k kill buffer
C-k kill to end of line
C-w cut A-w copy C-y paste



files
c-x c-f, c-x c-s
c-x c-b list buffers

cut paste
C-k C-y


https://www.gnu.org/software/emacs/manual/html_node/emacs/Several-Buffers.html#Several-Buffers


erasing https://www.gnu.org/software/emacs/manual/html_node/emacs/Erasing.html



VSCode Shortcuts
ctrl+` pulls up terminal
extensions
emacs friendly keymap by Leaping Frog Studios

// Place your key bindings in this file to override the defaults
[
   // ...
   {
       "key": "ctrl+tab",
       "command": "workbench.action.nextEditor"
   },
   {
       "key": "ctrl+shift+tab",
       "command": "workbench.action.previousEditor"
   }
]
 




Emacs
How to learn Emacs


Summary of essential emacs commands https://www.math.utah.edu/computing/emacs/emacs-commands.html


split-window-right  C-x 3
delete-window  C-x 0
switch between windows C-x o  "other"


winner-mode
C-c <left> undo
C-c <right> redo


splitting windows https://www.gnu.org/software/emacs/manual/html_node/emacs/Split-Window.html
delete-window https://stackoverflow.com/questions/11106377/is-there-a-way-to-undo-split-window-below-in-emacs

Windows
C-x 1 delete all others
c-x 0 delete this window
c-x 2 split window top and bottom
c-x 3 split window left and right
c-x o "other" change to another window

Cancelling


Buffers
C-x <left>  previous
C-x <right> next
C-x C-b  list-buffers
C-x k buffer <RET> Kill buffer buffer (kill-buffer).

Terminal
M-x term open full terminal
C-c o 	switch to other window from terminal
https://stackoverflow.com/questions/7451955/emacs-switching-out-of-terminal
M-x !  terminal command


Files
C-x C-f  open file, dir, new file
C-x C-s save file
C-x C-c close emacs


Text Editing
C-k  cut line
C-y paste (yank)
Use C-SPC to begin text selection and then run a command to end the text selection
C-w cut
C-y paste
M-y paste older stuff


C-g 	quit minibuffer command
C-_      undo
C-/ 	undo
C-x u	undo last command

M-<    go to beginning of file
M->   go to end of file

M-f  forward one word
M-b  backward one word

C-v pagedown
M-v pageup


Quitting and aborting https://www.gnu.org/software/emacs/manual/html_node/emacs/Quitting.html






extern "C" {
#include "c-header.h"
}

gcc -g -fsanitize=address -Wall -pedantic -std=c99   -c *.c
gcc -g -fsanitize=address -Wall -pedantic -std=c++11 -c *.cpp
gcc -g -fsanitize=address -Wall -pedantic *.o
rm *.o
#./a.out $@

Address Sanitizer: A Memory Checking Tool - Clarissa Garvey https://www.youtube.com/watch?v=fwl7ddis1CA





2021 US Defense Budget
https://www.youtube.com/watch?v=e_HUkXn1XBE

B21 and F-15 silent eagle, less f-35
no predator drones instead probably x-47b, rq-170, rq-180
$ for nuclear submarines, nuclear missiles and long range missiles
3X AGM-158C LRASM antiship missile, cruise missiles
$15.4 billion for space force, moved money from airforce




Impeller vs Propeller





Explosive Propelled Projectiles

The main characteristic of explosives seem to be the closeness of the oxydizer and fuel, often in the same molecule, allowing for a very fast reaction rate.

If gases are used then they must be mixed thoroughly beforehand.
https://en.wikipedia.org/wiki/Light-gas_gun

A 5.56x45 NATO round converts chemical potential energy into approximately 2kJ of kinetic energy
A kilogram of hydrogen combustion by comparison releases 140MJ of energy
A kilo of propane releases approximately 50MJ
so 1 gram of propane would release 50kJ which is 10X shotgun muzzle energy

The only question is how quickly the combustion happens.  Fuel injectors exist.  A cannister of pure oxygen could be used or even liquid oxygen.

The energy density of gunpowder is 5-10MJ about an order of magnitude less than hydrocarbons or hydrogen combustion
https://en.wikipedia.org/wiki/Energy_density





https://www.nasa.gov/centers/wstf/site_tour/remote_hypervelocity_test_laboratory/two_stage_light_gas_guns.html


1 mole of gas takes approximately 25 litres at 25C.  So 1g of hydrogen would take up 25L if it displaces all of the air.
Propane has a molecular weight of 44.  So 1 gram of propane would take up 25/44L or about half a litre if it displaced all of the air, which is much more manageable.

and in fact the vapour pressure at 20C is about 8X atmospheric pressure so about 8X the density I imagine.
853.16 kPa (at 21.1 °C (70.0 °F))

Note on Ammunition Size
5.56x45mm
bullet-width x case-length
5.56mm is width of bullet / inner diameter of barrel
45mm is the length of the case which contains the powder


556 Maximum Chamber Pressure is listed as about 500MPa which is significantly lower than the Merlin 1D chamber pressure of 10MPa or even the Raptor rocket engine chamber pressure which is 30MPa.  






Voltage required to overcome electrical resistance of a human
36V
https://www.quora.com/What-is-the-minimum-voltage-required-to-get-a-human-shocked



Make Timelapse of Video

	ffmpeg -i input.mp4 -filter:v "setpts=0.01*PTS" output.mp4

0.01 means 100 times regular speed

Get Download Link for Youtube Video

	youtube-dl -g <url>
Sync Directories in Linux

	rsync -av <sender> <receiver>

-a, --archive	archive mode; equals -rlptgoD (no -H,-A,-X)
-v, --verbose	increase verbosity
-u, --update	skip files that are newer on the receiver
--delete	delete extraneous files from dest dirs

https://www.computerhope.com/unix/rsync.htm
https://unix.stackexchange.com/questions/203846/how-to-sync-two-folders-with-command-line-tools





australia: man headbuts former prime minister https://www.youtube.com/watch?v=2M5hbSPwnBc&feature=youtu.be&t=53


ffmpeg put two videos side by side  https://unix.stackexchange.com/questions/233832/merge-two-video-clips-into-one-placing-them-next-to-each-other


Make and Append Tag in Javascript

let make = function(tag, text){
let a = document.createElement(tag);
a.innerHTML = text;
document.body.appendChild(a);
window.scrollBy(0,100);
}

make('button', 'Hello World!');



Fundamentals of Small Arms Weapons
chambering locking firing unlocking extraction ejection cocking feeding https://www.youtube.com/watch?v=NZX7X3pJgH8
types of operation: gas operated, blowback, https://www.youtube.com/watch?v=MJGu8prreZM



Employment in Australia 
The workforce participation rate is 65% and 50% of workers are casual or part-time.  So arguably around 30% of the potential workforce have jobs that can support dependents.

The workforce is composed of 6% employers 10% self employed 20% casual and 30% full time and 30% part-time.
https://www.aph.gov.au/About_Parliament/Parliamentary_Departments/Parliamentary_Library/pubs/BriefingBook45p/EmploymentAustralia
https://cdn.aigroup.com.au/Economic_Indicators/Research_Notes/2018/Ai_Group_casual_work_June_2018.pdf
https://www.abs.gov.au/ausstats/abs@.nsf/products/08B16CB4B2E7F152CA2575E70019CA3B?OpenDocument


Compatible File Systems across different operating systems

Best File System for Compatibility between operating systems is probably NTFS.  Drivers can be installed on mac ($25 tuxera) and linux.

Usually i just go with NTFS. It's way better than FAT32, and it's relatively easy to install NTFS-compatibility on both Mac and Linux (compared to installing filesystems on Windows).
For Mac you need either the free NTFS-3g or the commercial version of the same, Tuxera NTFS. These are only needed if you want to be able to write to the disk. OSX can read NTFS.
For Linux, it's also NTFS-3g. To install it on Ubuntu: sudo apt-get install ntfs-3g.


Letter to Siemens

Dear <insert name here>,

My name is Nicolas Schmidt I am a fourth year engineering student at the University of Queensland and I’m looking for professional placement opportunities.
I have a GPA of 6.3 and I have work experience in sensor of prototyping and machine learning training as well as her experience in FPGA Computervision research. In addition have completed a bachelor of science majoring in biochemistry. 

I would be most appreciative If you would let me know what you are looking for in applicants so I could tailor the end of my degree more appropriately.  

Yours sincerely, 

Nicolas Schmidt




Mandelbrot Videos

limitless mandelbrot https://yafoo.s3-ap-southeast-2.amazonaws.com/limitless_mandelbrot.webm remixed from https://www.youtube.com/watch?v=0jGaio87u3A
how chaos bifurcation relates to mandelbrot set https://youtu.be/ovJcsL7vyrk?t=400 by veritasium

Mandelbrot website https://yafoo.s3-ap-southeast-2.amazonaws.com/20200214-template-website/index.html





Cost of Living Inflation in the United States
Comparing the cost of living from 2000 to 2020: Inflation is a lot higher than you think and your purchasing power is declining.





ArcGIS Mapping by Hussein Nasser in Javascript Mapping API; programming, maps

https://geojson.org/

https://bitwise-public.s3-ap-southeast-2.amazonaws.com/all-in-one-maps/index.html





Science; geometric algebra, particle physics, battery tech, bio-battery

geometric algebra in particle and string theories https://pdfs.semanticscholar.org/b109/b744b35040f9b6f658ee43d04381ee5bcaf1.pdf

high energy density sugar bio-battery  https://www.nature.com/articles/ncomms4026

silicon anode lithium ion battery https://arstechnica.com/science/2020/02/welcome-to-the-era-of-supercharged-lithium-ion-batteries/


Hue Saturation Luminosity HSV HSL RGB Color

saturation can be thought of as a proportion of the value (or luminosity as I prefer to think of it).  I don't know what the distinction betwee luminosity and value is
The effects of changing these parameters can be played with here http://math.hws.edu/graphicsbook/demos/c2/rgb-hsv.html


L5 Caseless Ammo Rifle
https://hiconsumption.com/fdm-l5-caseless-ammo-rifle/


Best Hard Drive Docking Stations
https://hddmag.com/top-7-best-hard-drive-docking-stations/




2018 Sem 1 UQ Subjects
Enrolment Summary
Course list for the Electrical and Computer Engineering Dual Major - my.UQ - The University of Queensland, Australia
Photonics - my.UQ - The University of Queensland, Australia
Microwave Engineering - my.UQ - The University of Queensland, Australia
Advanced Topics in Security - my.UQ - The University of Queensland, Australia
Human-Computer Interaction - my.UQ - The University of Queensland, Australia
Power Systems Analysis - my.UQ - The University of Queensland, Australia
Project Management - my.UQ - The University of Queensland, Australia
Control Engineering 1 - my.UQ - The University of Queensland, Australia


Thesis
MACHINE LEARNING APPLIED TO 3D MAGNETIC RESONANCE IMAGES
https://student.eait.uq.edu.au/projects/index.wphp?act=project_detail&id=4183



Orbit in 4K Video
 https://www.youtube.com/watch?v=7KXGZAEWzn0 





US Politics

In the USA the candidate who spends the most wins more than 90% of the time in the house.  In the senate they win 80% of the time.  This means the person who wins is the usually just the best at raising money and not necessarily the person who has characteristics that might be desirable in a leader. (https://fivethirtyeight.com/features/money-and-elections-a-complicated-love-story/)


x17 is a 17GeV particle that is a candidate for dark matter.  Below is an image where the proposed particles is moving in the right direction away from the nucleus.  x17's large mass means that it is moving relatively slowly in the right direction and when it decays and the decay particles go sideways there will be a large angle of the decay particles movement relative to the original x17 particle, if it really exists.




dolphins may communicate sono-pictorially.  They communicate in frequencies up to about 100KHz and may send sounds that mimic the echolocation data that they receive from objects to send "drawings" to their friends.
  https://upliftconnect.com/dolphins-communicate-holographically/

dolphins also seem to have twice the number of cortical neurons as humans indicating that they are more intelligent. 
" We found that the long-finned pilot whale neocortex has approximately 37.2 × 109 neurons, which is almost twice as many as humans, and 127 × 109 glial cells" (https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4244864/ 2014)

Sperm whales communicate with clicks up to 236 decibells which 

animals by number of neurons https://en.wikipedia.org/wiki/List_of_animals_by_number_of_neurons
Notably absent from this are the cetaceans who reportedly have more cortex neurons than humans





Natural Units in Physics (meausring everything in GeV)
http://www.phys.ufl.edu/~avery/course/4390/f2015/lectures/natural_units.pdf
h has units GeV.s
c has units m/s
set c=h=1


Si vis pacem, para bellum

https://twitter.com/bitwiseag
https://www.wineaustralia.com/getmedia/54a713f2-6b80-4e7c-9fd4-3dbf8876d759/DPI-1401-Final-Report
https://www.ozbargain.com.au/deals/techfast.com.au
https://advancedlifesupport.com.au/
https://towardsdatascience.com/locate-v-beat-in-electrocardiogram-ecg-2857157c5c97
https://developers.google.com/chart/interactive/docs/gallery/linechart



Engineering Professional Practice
https://www.eait.uq.edu.au/filething/get/36872/Activity%2520Table_Students.pdf
https://student.eait.uq.edu.au/practice/claim/

Azron Pty Ltd 39-41 Mcphail Road Narangba Queensland 4504  ABN 76627164925
378.5 hours  admin@azron.com.au

During the period from 10 April 2019 to 28 January 2020 working for Azron P/L the vast majority of my work has been in two distinct fields - developing wireless sensor clusters and training region convolutional neural network (R-CNN) object detection systems.  

I developed two wireless sensor clusters which each communicated with 3-4 sensors and relayed the information back to Amazon Web Services (AWS) servers.  The sensor clusters communicated over wifi and were able to be operated on battery power.  The mainboard was a Pycom which I programmed in micropython.  I performed statistical analysis on the uploaded data.  This all involved:
procuring hardware; 
designing boards and soldering; 
learning about sensors and different platforms; 
writing and adapting code; 
finding enclosures;  waterproofing; testing; 
deploying the sensors to a farm in Tasmania; 
providing support;
remote debugging;
writing documentation.

Sensors that I got working included UV, RGB, Temperature, Pressure, Moisture, Smoke, Gas (e.g. CO2, CH4) sensors
I also prototyped sensors on the Raspberry Pi including the FLIR lepton and D18B20 Temp sensor using One Wire.

I trained several R-CNN object detection systems remotely using AWS elastic compute cloud (EC2) and the You only look once (YOLO) v3 realtime object detection system.  This included
using ssh to remotely login to EC2; 
building a forked repo of YOLOv3
setting up and customizing the configuration files and makefiles; 
installing CUDA drivers; 
extracting images from video; 
web scraping
properly annotating images;
organising training and testing datasets; 
having meetings about the proper bounding box classes and the limitations of the technology
running inference on videos to create demos
using AWS simple storage service (S3) to host input and output video data

Summary of technologies used
BASH, Linux
Micropython
Amazon Web Services (AWS) S3, EC2, Sagemaker
YOLO v3 real-time object detection
ffmpeg
HTML, javascript, CSS (ybat labeller)













I developed two wireless sensor clusters which each intermittently read from 3-4 sensors and wirelessly uploaded the information back to AWS servers.  The devices communicated over wifi and were able to be operated on battery power.  The mainboard was a Pycom which I programmed in micropython.  I performed statistical analysis on the data.  Sensors included UV, RGB, Temperature, Pressure, Moisture, Smoke, Gas (e.g. CO2, CH4).  I also set up sensors on the Raspberry Pi; the FLIR lepton IR camera and D18B20 Temperature sensor.

I trained several object detection systems remotely using AWS EC2 and the YOLOv3 R-CNN.  This involved ssh, configuring neural net architectures, web scraping (Go, javascript), extracting images from video (ffmpeg), annotation (ybat), running inference (BASH), and AWS S3.  The trained neural networks were run on agricultural videos to create several demos.  Statistical analysis was performed on the bounding box data.




Debian
netselect-apt
apt install nodejs npm
install angular cli https://cli.angular.io/
https://towardsdatascience.com/building-fully-custom-machine-learning-models-on-aws-sagemaker-a-practical-guide-c30df3895ef7

other tabs
(14) Chris Christodoulou | Risk of Rain 2: Early Access OST (2019) - YouTube
(14) Jonathan Blow: Game design: the medium is the message - YouTube
GraphQL Tutorial - How to Manage Image & File Uploads & Downloads with AWS AppSync & AWS Amplify - DEV Community 👩‍💻👨‍💻
Class: AWS.SageMakerRuntime — AWS SDK for JavaScript
Slack | Nicolas Schmidt | JC Tech
S3 Management Console
Building fully custom machine learning models on AWS SageMaker: a practical guide
Amazon SageMaker runtime now supports the CustomAttributes header | AWS Machine Learning Blog
Deploy a Model on Amazon SageMaker Hosting Services - Amazon SageMaker
Building fully custom machine learning models on AWS SageMaker: a practical guide



https://upload.wikimedia.org/wikipedia/commons/4/49/World_population_density_1994_-_with_equator.png
Pilot Wave Theory and Quantum Realism | Space Time | PBS Digital Studios
https://youtu.be/Rh0pYtQG5wI?t=577

Math Tutoring
pauls online math notes algebra  use as structure for teaching  
arithmetic.zetamac.com
khanacademy.com


algebra - etymology
arabic - the reunion of broken parts, al-jabr
the science of restoring what is missing or equating like with like (ilm al-jabr wa'l-muqabala)
=> algorithm


alexeyAB seems to agree with my hunch that when you add an additional class to a set it's better to start training again from the beginning using

9 December
yolov3 in a flask server https://medium.com/analytics-vidhya/object-detection-using-yolo-v3-and-deploying-it-on-docker-and-minikube-c1192e81ae7a


this guy is awesome https://ml4a.github.io/demos/


gluonCV yolov3 https://aws.amazon.com/marketplace/pp/Amazon-Web-Services-GluonCV-YOLOv3-Object-Detector/prodview-5jlvp43tsn3ny

serverless video on demand https://aws.amazon.com/blogs/networking-and-content-delivery/serverless-video-on-demand-vod-workflow/

yolo works in a browser.  tiny yolo.  small video.  https://modeldepot.github.io/tfjs-yolo-tiny-demo/

aws machine learning blog https://aws.amazon.com/blogs/machine-learning/

laptops dec 2019 https://youtu.be/Dhld_z5keYI?t=970  lenovo c940

There are python and javascript sdks for aws which seem to allow all of the functionality that I might need.  there might be asynchronous stuff I have to worry about.
To Do/Investigate
train single class growth model with anchors on jupyterlab.  
call yolov3 model from within python https://machinelearningmastery.com/how-to-perform-object-detection-with-yolov3-in-keras/
s3 upload with progress bar using javascript aws sdk https://medium.com/@shresthshruti09/uploading-files-in-aws-s3-bucket-through-javascript-sdk-with-progress-bar-d2a4b3ee77b5
python aws sdk (boto3) quickstart https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html

8 December
Serverless sagemaker endpoint https://aws.amazon.com/blogs/machine-learning/build-a-serverless-frontend-for-an-amazon-sagemaker-endpoint/
iris model html endpoint http://bitwise-chalice.s3.amazonaws.com/index.html

practical limit of http post file size seems to be 2GB but for large files need a progress bar and preferably saving of state.  Further than this perhaps an app outside of the browser might be needed.
https://stackoverflow.com/questions/2880722/can-http-post-be-limitless
https://stackoverflow.com/questions/2880722/can-http-post-be-limitless/55998160#55998160

https://stackoverflow.com/questions/15173641/http-put-request-progress-bar-implementation

kaos beer counter https://medium.com/ki-labs-engineering/kaos-beerbot-smarter-3dbd6fa26d53



https://aws.amazon.com/blogs/machine-learning/build-a-serverless-frontend-for-an-amazon-sagemaker-endpoint/

Hosting a static website on s3 https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html

Set Up YOLOv3 & Darknet on Google Colab IN *ONE* CLICK | YOLOv3 Series 6 & Colab Like a Pro #3
 https://github.com/ivangrov/YOLOv3-GoogleColab

sagemaker demo s3 bucket	
https://s3.console.aws.amazon.com/s3/buckets/bitwise1/sagemaker/DEMO-deepar/?region=ap-southeast-2&tab=overview

ssh -i /path/my-key-pair.pem ec2-user@ec2-198-51-100-1.compute-1.amazonaws.com



Serverless sagemaker endpoint
https://aws.amazon.com/blogs/machine-learning/build-a-serverless-frontend-for-an-amazon-sagemaker-endpoint/

iris model html endpoint
http://bitwise-chalice.s3.amazonaws.com/index.html





Dec 6
https://github.com/ultralytics/yolov3  professional, currently maintained yolov3 object detection for iphone

jupyterlab terminal, notebook, click on image
https://github.com/awslabs/amazon-sagemaker-examples

https://modeldepot.github.io/tfjs-yolo-tiny-demo/
https://modeldepot.io/browse




Alpine linux in virtualbox
fn+up = page up in Mac OS; hotkeys osx
shift+pageup is scroll up in virtualbox terminal

hostname
passwd
which
apk add; apk search
poweroff
reboot

zip -r <file.zip> <directory>
tmux a
C-b d  C-b [  C-b ]
lynx
.	this directory
~	home directory




DWM is a really light weight window manager.  it's quick and easy to compile
https://ratfactor.com/slackware/dwm2/

S3 upload and trigger function demo by Serverless
Upload a file to S3 to trigger a lambda function
https://github.com/serverless/examples/tree/master/aws-node-upload-to-s3-and-postprocess

xdg-open(1) - Linux man page
https://linux.die.net › man › xdg-open
xdg-open opens a file or URL in the user's preferred application. If a URL is provided the URL will be opened in the user's preferred web browser. If a ...


Interesting Links
cloudfront is an aws cdn
https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-post-example.html
https://hackernoon.com/serverless-password-protecting-a-static-website-in-an-aws-s3-bucket-bfaaa01b8666
https://read.acloud.guru/how-to-add-file-upload-features-to-your-website-with-aws-lambda-and-s3-48bbe9b83eaa
https://www.pyimagesearch.com/2018/11/12/yolo-object-detection-with-opencv/



Makefiles and build systems with Dr Brian Fraser
if there's a good variable rename system like in eclipse then you don't really need c++ namespaces
variable rename (rename symbol) in vscode is slow and requires a confirmation

dr brian fraser c programming in linux
makefiles and rename variable in eclipse  by dr brian fraser https://www.youtube.com/watch?v=E36QpJdEghg


what is a makefile https://opensource.com/article/18/8/what-how-makefile

in c programming a program that automatically renames all the functions in your header and also the capability to generate a header file would be handy.
could it just load all the things from all the files, remove the function bodies and put it into one big file???  I probably need to do a bunch more c programming before I consider making a tool like this.  to do a good rename variable implementation you need to actually parse the source code into a syntax tree.


What's so special about smalltalk message passing when compared to methods in c++?
https://stackoverflow.com/questions/42498438/whats-so-special-about-message-passing-in-smalltalk

As far as I can tell, messages are just strings as opposed to the type safe arguments that the methods of c++ take
It's up to the object to deal with that arbitrary string
which is kind of cool.  an object is like a little interpreter.  or like a server or something


how to use c source files in a c++ project?
https://stackoverflow.com/questions/13694605/how-to-use-c-source-files-in-a-c-project
write the main function in c++
compile c files with c compiler
compile c++ files with c++ compiler
link with the c++ linker
use extern "C" {} around all c includes

gcc -fsanitize=address -Wall -pedantic -std=c99   -c *.c
gcc -fsanitize=address -Wall -pedantic -std=c++11 -c *.cpp
gcc -fsanitize=address -Wall -pedantic *.o
rm *.o
#./a.out $@



https://stackoverflow.com/questions/1041866/what-is-the-effect-of-extern-c-in-c




Good hexdump settings
keywords: hexedit hexeditor

hexdump -v -e '1/0 "%010_ad  |" 100/1 "%_p" 1/0 "|\n"' a.bin
https://brendanzagaeski.appspot.com/0006.html





F2F Meeting 4 December

capture 80% flowering
climate change means we can't rely on the same time each year to do spraying and other things

track growth of 

price viewer
validate viewer with consultants and 





Run Python in interactive mode

# python -i twolayers.py
# run in interactive mode
 


https://towardsdatascience.com/how-to-build-your-own-neural-network-from-scratch-in-python-68998a08e4f6


Train on sagemaker so I can test the nn in the cloud

December 2
Using 5 layer yolo with default weights to try to detect posts and crowns

for training for both small and large objects use modified models:
Full-model: 5 yolo layers: https://raw.githubusercontent.com/AlexeyAB/darknet/master/cfg/yolov3_5l.cfg



https://www.youtube.com/watch?v=8J7y513oSsE
AWS CLI
click username > security credentials > access keys

aws s3 ls


To Do

digital systems design
mousepad
[x] washing powder
chair



labelling
off to labelling. proof of concept side on vines
we decided to define the area to detect as being to the right of the trunk and encompassing all leaves and green matter.  no removal of what might be considered outliers

after that I think I will make a basic neural net example - single layer perceptron.  one layer just for detecting a basic pattern.
after that I think I'll learn about segmentation and sagemaker
then I might do some plumbing and interface investigations


learning
andrew ng stanford https://www.youtube.com/watch?v=PPLop4L2eGk&list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN

numpy multilayer perceptron https://towardsdatascience.com/building-neural-network-from-scratch-9c88535bf8e9

https://github.com/jonasbostoen/simple-neural-network
https://youtu.be/YG15m2VwSjA?t=675

https://www.kaggle.com/niyipop/2-layer-neural-network-from-scratch-using-numpy

https://iamtrask.github.io/2015/07/12/basic-python-network/

https://au.mathworks.com/matlabcentral/fileexchange/55946-mlp-neural-network-trained-by-backpropagation

https://towardsdatascience.com/multi-layer-neural-networks-with-sigmoid-function-deep-learning-for-rookies-2-bf464f09eb7f







Yield prediction through object detection 

Improving Object Detection
more data 
augmentation
mechanical turk
analysis of output neural nets

segmentation
post analysis

specialized vs more general NN
generation of anchors (basically aspect ratios) through k-means



2X images??
check on same video, check to see performance - underwhelming
train till 4000 iterations - check
annotate 2fps image set




 4000: 0.074733, 0.044050 avg loss, 0.000010 rate, 1.919508 seconds, 256000 images
Resizing to initial size: 416 x 416 
 try to allocate additional workspace_size = 1213.50 MB 
 CUDA allocate done! 

 calculation mAP (mean average precision)...

 detections_count = 31, unique_truth_count = 25  
class_id = 0, name = post, ap = 96.00%           (TP = 25, FP = 2) 

 for conf_thresh = 0.25, precision = 0.93, recall = 1.00, F1-score = 0.96 
 for conf_thresh = 0.25, TP = 25, FP = 2, FN = 0, average IoU = 81.18 % 

 IoU threshold = 50 %, used Area-Under-Curve for each unique Recall 
 mean average precision (mAP@0.50) = 0.960000, or 96.00 % 

Set -points flag:
 `-points 101` for MS COCO 
 `-points 11` for PascalVOC 2007 (uncomment `difficult` in voc.data) 
 `-points 0` (AUC) for ImageNet, PascalVOC 2010-2012, your custom dataset

 mean_average_precision (mAP@0.5) = 0.960000 




https://au.pcpartpicker.com/

https://htmtopdf.herokuapp.com/ipynbviewer/

Check s3 for other videos. 
Ask fiona for more data
* augment dataset using imgaug
look at mechanical turk


 turn off random resize (resize=1) in configuration file since I have generated anchors for the set it seems to be learning very quickly anchors won't work for a more general neural net though. That will require significantly more training fish eye lens of gopro causes curvature of objects that would otherwise be straight. This will be a challenge for yolov3 produced video of post training. detects posts in unseen footage but bounding boxes vary too much to be useful. Given the small dataset it's been trained on it's impressive that it's this good actually. 




https://github.com/AlexeyAB/darknet
https://docs.google.com/document/d/1oZnhcpbuSiBffBCi7UmjNkl7p0PUY3RDwD7U7deAiXE/edit#

http://52.65.163.141:8090/ mAP and Loss chart
mAP and Loss chart for Posts 19 Nov 2019

Train on Amazon EC2, to see mAP & Loss-chart using URL like: http://ec2-35-160-228-91.us-west-2.compute.amazonaws.com:8090 in the Chrome/Firefox (Darknet should be compiled with OpenCV): ./darknet detector train cfg/coco.data yolov3.cfg darknet53.conv.74 -dont_show -mjpeg_port 8090 -map
Requires inbound port 8090 to be open.  see https://github.com/AlexeyAB/darknet/issues/4116



Tmux attach and detatch

tmux a 
ctrl+b d

to run tmux initially use "tmux".  To attach to the previous session use "tmux a".  To detatch from the session use "ctrl+b, d" or "ctrl+a, d" depending on the system.



Things to try next
augment dataset
turn off random resize (resize=1) in configuration file
actually since I have generated anchors for the set it seems to be learning very quickly
anchors won't work for a more general neural net though.  That will require significantly more training





show/hide on mac   command+shift+.  (Command+>)
Bash change extension
for f in *.jpg; do echo ${f%.jpg}.txt; done


Look into
MATLAB Labelling, other labelling tools, AWS
data augmentation tools
segmentation

Augmentation
https://github.com/aleju/imgaug
https://www.kdnuggets.com/2018/09/data-augmentation-bounding-boxes-image-transforms.html
https://machinelearningmastery.com/how-to-configure-image-data-augmentation-when-training-deep-learning-neural-networks/
https://towardsdatascience.com/data-augmentation-for-deep-learning-4fe21d1a4eb9
https://nanonets.com/blog/data-augmentation-how-to-use-deep-learning-when-you-have-limited-data-part-2/
5.4 Benefits and Drawbacks of ImgAug Library  https://www.youtube.com/watch?v=0d_uM5OCnCY
Custom object detection:
https://github.com/AlexeyAB/darknet#how-to-train-to-detect-your-custom-objects
for each object which you want to detect - there must be at least 1 similar object in the Training dataset with about the same: shape, side of object, relative size, angle of rotation, tilt, illumination. So desirable that your training dataset include images with objects at diffrent: scales, rotations, lightings, from different sides, on different backgrounds - you should preferably have 2000 different images for each class or more, and you should train 2000*classes iterations or more	

White noise to block out people's voices
 https://noisyworld.org/noise-cancelling-headphones-voices/
open this https://mynoise.net/NoiseMachines/whiteNoiseGenerator.php
Rebol Core

Install
Mac  	wget https://github.com/nicolas42/rebol/blob/master/mac/rebol
Linux  	wget https://github.com/nicolas42/rebol/blob/master/linux/rebol

Make Train, Test Files

ls -1 dolphin/*.jpg | sort -R > train.txt

n=$( wc -l < train.txt )
n=$( echo "$n * 0.2" | bc )
printf "%.0f" $n

sed -n "1,$n p" train.txt > test.txt
sed -n "1,$n d" train.txt

FlashCards - Bash
ls -1; print in one column
sort -R ; random
$(...) ; do in subshell
echo "$n * 0.2 / 1" | bc ; basic calculator, returns integer
sed -n "1,200 p" fin ; print first 200 lines
sed -n "1,200 d" fin ; delete first 200 lines

Darknet

Install

	git clone https://github.com/AlexeyAB/darknet
	cd darknet
	make

get some premade training weights

	wget https://pjreddie.com/media/files/darknet53.conv.74


*** Copy all the files in this directory into the darknet directory ***

Train

	./darknet detector train obj.data obj.cfg darknet53.conv.74

Test

	./darknet detector test obj.data obj.cfg obj.weights <input.jpg>



copy from ec2
scp -r -i ~/.ssh/id_rsa.pub ubuntu@13.236.66.105:/home/ubuntu/output ~/output

test weights

./darknet detector test cfg/obj.data cfg/obj.cfg obj_11000.weights darknet_training_demo/nfpa_dataset/pos-1.jpg


test weights
./darknet detector test obj.data obj.cfg obj_11000.weights pos-286.jpg







Appendix - Notes

./darknet detector train obj.data yolo-obj.cfg darknet19_448.conv.23
./darknet detector <verb> data config weights [image]



Appendix - Source
based on this https://medium.com/@manivannan_data/how-to-train-yolov2-to-detect-custom-objects-9010df784f36


Appendix - Bash Resources

bash http://www.compciv.org/unix-tools/
sed http://www.grymoire.com/Unix/Sed.html
bash split file at line number https://stackoverflow.com/questions/3066948/how-to-file-split-at-a-line-number
float 2 int https://unix.stackexchange.com/questions/89712/how-to-convert-floating-point-number-to-integer


Labelling and Data Augmentation

labelling
https://github.com/jsbroks/awesome-dataset-tools#labeling-tools
https://www.reddit.com/r/MachineLearning/comments/ctkt1t/data_annotationdata_labelling_research/
sagemaker groundtruth

matlab ground truth
https://au.mathworks.com/help/driving/ug/get-started-with-the-ground-truth-labeler.html
https://www.youtube.com/watch?v=ow_B_30WU1s


data augmentation https://medium.com/@thimblot/data-augmentation-boost-your-image-dataset-with-few-lines-of-python-155c2dc1baec




Deferred Exams

Deferred and supplementary exams are held from Tuesday 10 December to Friday 13 December 2019 (inclusive)


JC Tech
Get Gopro Telemetry Data

FFMPEG and Golang
http://blog.programster.org/extracting-gps-from-go-pro-hero-5
https://github.com/JuanIrache/gopro-utils

# Install
wget https://raw.githubusercontent.com/JuanIrache/gopro-utils/master/bin/gpmd2csv/gpmd2csv.go
go get github.com/JuanIrache/gopro-utils/telemetry
go get github.com/paulmach/go.geo

# Run
ffmpeg -y -i $1 -codec copy -map 0:3 -f rawvideo a.bin
wait
go run gpmd2csv.go -i a.bin -s g 
wait
rm a.bin


# pernod ricard video
#wget https://www.dropbox.com/s/6tyfls1yxdj0mv5/20191021_MV3PNNC174.MP4?dl=0


NodeJS
https://www.reddit.com/r/gopro/comments/cnasn2/how_to_use_gpmf_parser_tool/

nodejs json pretty print
JSON.stringify's 3rd parameter can be a string or a number or space which is used to make your JSON look pretty  e.g. JSON.stringify(json_data,null,4) (stackoverflow.com)

Notes ARCGIS Mapping
https://codepen.io/esri_devlabs/pen/JZeeEZ?editors=1000

ArcGIS Example Code  https://developers.arcgis.com/javascript/latest/guide/display-point-line-and-polygon-graphics/
Hussein Nasser ArcGIS Youtube playlist  https://www.youtube.com/playlist?list=PLQnljOFTspQUppK8iiIuoQJTAj436IWQz

this guy is amazing http://blog.programster.org/extracting-gps-from-go-pro-hero-5


AWS Lambda
go programming in lambda https://docs.aws.amazon.com/lambda/latest/dg/go-programming-model.html
AWS Lambda natively supports Java, Go, PowerShell, Node.js, C#, Python, and Ruby code, and provides a Runtime API which allows you to use any additional programming languages to author your functions. Please read our documentation on using Node.js, Python, Java, Ruby, C#, Go and PowerShell.


Notes - Get telemetry data from a gopro video

https://github.com/JuanIrache/gopro-utils

	ffmpeg -y -i $1 -codec copy -map 0:3 -f rawvideo a.bin &&
wait &&
go run gpmd2csv.go -i a.bin -s g

https://unix.stackexchange.com/questions/305039/pausing-a-bash-script-until-previous-commands-are-finished

ffmpeg -y -i <input.mp4> -codec copy -map 0:<integer> -f rawvideo <file.bin>&& wait && go run gpmd2csv.go -i <file.bin>
e.g. ffmpeg -y -i test.mp4 -codec copy -map 0:3 -f rawvideo a.bin && wait &&  go run gpmd2csv.go -i a.bin

https://www.reddit.com/r/gopro/comments/cnasn2/how_to_use_gpmf_parser_tool/
https://github.com/stilldavid/gopro-utils
https://github.com/gopro/gpmf-parser

Output Coordinates from yolo
Use the -ext_output option with AlexeyAB's darknet fork to output bounding box coordinates to a file

./darknet detector test cfg/coco.data cfg/yolov3.cfg yolov3.weights -ext_output data/dog.jpg > coords.txt






links
Notebook - Google Docs
Storyboard
python - Convert YoloV3 output to coordinates of bounding box, label and confidence - Stack Overflow
darknet/darknet.c at f6d861736038da22c9eb0739dca84003c5a5e275 · pjreddie/darknet · GitHub
GitHub - gopro/gpmf-parser: Parser for GPMF™ formatted telemetry data used within GoPro® cameras.
Solved: gps data extraction. - GOPRO SUPPORT HUB
Extracting the metadata in a useful format - GOPRO SUPPORT HUB
GitHub - JuanIrache/gopro-utils: Tools to parse metadata from GoPro Hero 5 cameras
GitHub - stilldavid/gopro-utils: Tools to parse metadata from GoPro Hero 5 & 6 cameras


goquery can be used to query html in a similar manner to javascript
goquery
https://github.com/PuerkitoBio/goquery/blob/dc2ec5c7ca4d9aae063b79b9f581dd3ea6afd2b2/property.go

increase the number of concurrent open files in mac os
ulimit -a
https://stackoverflow.com/questions/10095796/os-x-terminal-ssh-and-too-many-open-files




VSCode shortcuts


	// Place your key bindings in this file to override the defaults
[
    // ...
    {
        "key": "ctrl+tab",
        "command": "workbench.action.nextEditor"
    },
    {
        "key": "ctrl+shift+tab",
        "command": "workbench.action.previousEditor"
    }


    {
        "key": "ctrl+n",
        "command": "cursorDown",
        "when": "textInputFocus"
    },
    // {
    //     "key": "alt+n",
    //     "command": "workbench.action.files.newUntitledFile"
    // },
    {
        "key": "ctrl+p",
        "command": "cursorUp",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+p",
        "command": "cursorPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+n",
        "command": "cursorPageDown",
        "when": "textInputFocus"
    },



    // {
    //     "key": "ctrl+k",
    //     "command": "editor.action.deleteLines",
    //     "when": "textInputFocus && !editorReadonly"
    // },
    {
        "key": "ctrl+d",
        "command": "deleteRight",
        "when": "textInputFocus && !editorReadonly"
    },
    // ctrl+a
    {
        "key": "ctrl+a",
        "command": "cursorLineStart",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "alt+a",
        "command": "editor.action.selectAll",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+e",
        "command": "cursorLineEnd",
        "when": "textInputFocus && !editorReadonly"
    },

]


(stackoverflow.com)
ctrl+shift+p   "Preferences: Open Keyboard Shortcuts (JSON)"



gopher is an app which makes an xbox 360 control the mouse pointer in windows
rbtray lets you minimize programs to the system tray by right clicking the minimize button http://rbtray.sourceforge.net/

https://github.com/gopro/gpmf-parser

New Laptop
something fast with a nice screen and nice speakers
high storage 512ssd or 1tb ssd, 
connectivity, good battery life, which I prefer to my 2014 macbook pro
maybe surface book, surface pro, surface laptop
surface pro 6 has 8th gen intel cpu
surface pro keyboard and pen = $400AUD
dock is $300 ffs

go to JB Hifi chermside

https://www.jbhifi.com.au/products/microsoft-surface-pro-7-i5-256gb-bundle-black
surface pro 7 8gb 256gb, $1950 including pen and keyboard, no dock

usb hubs can be bought for about $30 which have usb 3.0 hdmi rj45 micro sd card

which comes to $2000



surface in brisbane https://www.gumtree.com.au/s-electronics-computer/brisbane-city-brisbane/surface/k0c20045l3005773r100

https://www.ebay.com.au/itm/Microsoft-Surface-Laptop-i7-7th-Gen-16GB-Ram-512-SSD-GB-Win-Pro-10-As-Ne/274075323475?hash=item3fd0298c53:g:sUsAAOSwjKddulKB


Language is Abstract Thought


bilingual household where communication was not our strong suit
not particularly social
my main friend in primary school was a japanese boy who didn't have particularly good english skills

i didn't have particularly good language skills

at some point I came across the idea that language was associated with abstract thought.  I didn't particularly like this idea because I didn't particularly like language as a concept.  What does thought have to do with arbitrary sounds and symbols?  
continuity was superior to discrete objects in both thought and in music.


my attitude towards language ego protection




Continuous music
I had a strange idea that maybe I could make music that used a continuous frequency spectrum and that it might be superior to a discrete one.
It still might be a good idea to a small extent but it's been done a bit with trombones, musical saws, fretless guitars, theremins, etc.  Like most human cognition if there's too much chaos in the music the brain will protest.  So it's an interesting tool to delve into the interesting chaos but whole number ratios of frequency and beat are still pleasing and the main distinction between noise and music is order which is basically represented as the ratios of whole numbers (albeit usually implemented with an exponential sequence).  Getting off the topic...

exponential phenomena have the interesting property that the rate at which they change is proportional to their current value.  In contrast the rate of change of a polynomial is another polynomial which is an order lower.  For example if the side length of a square is increased by some tiny amount, the area of a square will increase by the length of two sides multiplied by that tiny amount (making it an area and not a length).  A=s^2  dA = 2s ds .

Accelerating bodies whose "height in the field" doesn't change too much also behave like order 2 polynomials.  (If they do travel very far then their acceleration starts to change in line with the inverse square law or some other dissipation law).   I don't know any good geometry to point to to imagine this but it's the same effect.
A bungee jumper will follow the curve of a square whose size keeps getting bigger at the same pace.  The height will decrease like H = t^2 and at any height or time if I perturb the time (inch it forward a little) the change in height will change by H=2t dt.   
If you do this again you'll get the acceleration which is a constant.  This constant is often called gravity (but gravity is more complicated than this).  Constants are nice because we can write them down and keep them in a book and use them later.  They feel like progress.  Next time we want to know how fast the thing will fall we open our book and look up our constant then we multiply it by the time or whatever and we'll get our result.  Constants are helpful.  

Constants and materials, stress strain curves
Constants are used all over engineering.  If you want to know how thick the steel is then you'll probably want to look up some constants related to steel.  If you're really in charge of a building then you'll probably have a lot of functions which relate the proportional increase in length, the force of tension; strain, stress.  in stress-strain curves.  Typically these are used for material properties.  There's a linear region whose gradient is called Young's modulus.  Here the material increases in length proportional to the applied stress.  so for a modulus=1, 1 Pascal of stress (pressure) will cause the the material to double in length, which is a bit strange I suppose.  It makes sense when you look at the definition of strain.

strain =  l/l

so strain = 1 means that the change of the materials length equals the original length - so the length would be double what it was originally.

These materials graphs change with temperature and probably other things too that I can't think of.  For instance the new SpaceX rocket under development is built out of steel, partly because steel is relatively cheap, but to a large extent because steel is much stronger at very low and very high temperatures than it is normally and spaceships go through very high and very low temperatures (during atmospheric entry and in the vacuum of space).  So temperature is very important.

If you want to go into this a bit more, particularly in regards to metals, you might have a look at grain boundaries, dislocations, and micro fractures (fracture mechanics).  also atom packing geometries (aluminium vs steel is a good comparison I seem to recall).  

300 series stainless steel coldformed at cryo https://twitter.com/elonmusk/status/1076612546793095168

plastic deformation seems to harden steel and other metals by 




Bioinformatics Links
Cincinatti Pediatric Hospital Bioinformatics Resources 
Bioinformatics Tutorials - Htheshadow, Youtube
bioconda on linux (5) Setting Up Your First Bioinformatics Computer - YouTube 
Biological Databases and Retrieval Systems (1999) Tel Aviv University
http://evolution.genetics.washington.edu/phylip/phylipweb.html

other links
https://www.youtube.com/channel/UCQF8Ts1jKNXMZ01p8AtccZQ
(5) Bioinformatics Tutorials (Lesson 9) Part 1:Using PHYLIP to build phylogenetic trees - YouTube
(5) Bioinformatics: What? Why? Who? (Video for Bioinformatics 2 Module) - YouTube
lec04.dvi
Bioinformatics Jobs (with Salaries) | Indeed.com
Notebook - Google Docs
bioinformatics resources - Google Search
Bioinformatics Resources and Tools
On Bioinformatic Resources
OBRC: Online Bioinformatics Resources Collection | HSLS
Databases & Tools - Bioinformatics Resources - LibGuides at Tufts University
EMBL Australia Bioinformatics Resource (EMBL-ABR) | EMBL Australia
EMBL-ABR - EMBL Australia Bioinformatics Resource
Bioinformatics Resources
PHYLIP on the Web

buy printer toner
Bash
http://www.compciv.org/unix-tools/
https://linuxhint.com/bash_read_command/



Rebol in Bash
Mac Install
wget http://rebolsource.net/downloads/osx-x86/r3-g25033f8
test(){./r3 --do "${*}"}

example:
test "foreach f read what-dir [ prin f prin { } ] "


r(){./r3 --do "${*}"}
example:
test "foreach f read what-dir [ prin f prin { } ] "

rebol binaries available here
http://rebolsource.net/


wget http://rebolsource.net/downloads/osx-x86/r3-g25033f8 -o r3
test(){./r3 --do "${*}"}


reb(){read line; ./r3 --do "${line}"}
C++
Church of Asan - Everybody seems to think that Asan the address sanitizer is the second coming.
-fsanitize=address

c++ linter: clang-format

combining c and c++

compile as  and you import c headers like this.  else they 
extern "C" {
#include "c-header.h"
}
https://stackoverflow.com/questions/17448014/how-to-use-c-code-in-c

CppCon 2014: Kostya Serebryany "Sanitize your C++ code"


change extension in bash
for f in *.c ; do echo ${f%.c}.cpp ; done

??? static and global override and final

http://www.phengkimving.com/#top_of_page

asldkfjalsdkf jas
df ajsdfk aljsdkjas
dfasjdfk



$@ expands to all command line arguments in bash
https://stackoverflow.com/questions/3811345/how-to-pass-all-arguments-passed-to-my-bash-script-to-a-function-of-mine




Year 4 subjects
METR4201  control systems 90%
ELEC4630 – Image Processing and Computer Vision
ENGG4801 thesis
COMP4403 compilers and interpreters
Electrical Energy Conversion & Utilisation (ELEC3300)




















































Thesis Application - Classification of Aortic Regurgitation in Rotary Blood Pumps
requirements https://student.eait.uq.edu.au/projects/?act=project_detail&id=5153

UQ Email https://portal.my.uq.edu.au/#/email

to: j.toyras@uq.edu.au  iteethes@uq.edu.au

Dear Professor Juha Toyras 
I wish to indicate my interest in a thesis project you have advertised.
Student Name: Nicolas Schmidt
Student Number: 44886356
Thesis Course Code: ENGG4801
Student Program and Plan: Bachelor of Engineering (Electrical and Computer)
Project Title: CLASSIFICATION OF AORTIC REGURGITATION IN HEARTWARE HVAD ROTARY BLOOD PUMPS

While reading your synopsis I was struck by the idea that your project might materially improve the lives of several people.  This made it more interesting to me than the other options.  I would be enthused to make this project succeed and to learn anything that might help doctors and patients.  

I feel that three years at UQ engineering has given me what I'd characterize as effective MATLAB skills.  In addition to the rudimentary data analysis skills that I assume all engineering students have, I received a high distinction in the machine learning subject (COMP4702) which covered a number of advanced classifiers and data analysis tools like PCA, tSNE, support vector machines, bayesian networks, neural network classifiers.  I'd be quite pleased to revisit this topic if necessary since it was quite interesting.

I also have industry experience.  I do unsupervised work for a startup company which is focused on vineyard agriculture.  I have completed two distinct tasks for them.  I have designed, built, and tested sensor clusters for the acquisition, analysis, and visualization of climate and weather data.  I have also trained an object detection system to detect grape bunches in images using vineyard video footage.

I also have some prior education which is somewhat medical.
Master of Medical Radiations from Monash University (2014)
Bachelor of Biochemistry from Queensland University of Technology (2004)

Please let me know if you'd like any further details.  I'd be very interested to see your benchtop model and data acquisition system.  

Sincerely,

Nicolas Schmidt








Industry experience
I designed, built, tested, and installed wireless sensor clusters which acquired data for several weeks and I completed some preliminary analysis and visualization on the data.  The startup then pivoted to machine learning so I trained an object detection system using yolov3











https://student.eait.uq.edu.au/projects/?act=project_detail&id=5153







MATLAB & Simulink
• Experimental Data Acquisition & Analysis
• Classification / Machine Learning Algorithms (e.g. Linear Classifiers, etc.)




After three years at UQ I'd characterise my MATLAB skills as being effective. Additionally I received a 
high distinction in UQ machine learning subject COMP4702 covering
classifiers, data visualization, and analysis: PCA, tSNE, support vector machines, bayesian networks
experience setting up long term wireless sensors clusters for data acquisition and doing preliminary analysis on the data
machine learning training experience: yolov3 object detection system






I'm not entirely sure what data is gathered from the benchtop model.





I have experience with data acquisition with multiple sensors.

effective MATLAB skills
experience with machine learning training

• Experimental Data Acquisition & Analysis

I imagine that in a broad sense I I'd be looking at indications that the pump was working harder with a reduced flow rate compared to when it was first installed and trying optimise the associated probability that regurgitations were occuring concurrently in the benchtop model somehow.  Please let me know if I'm somewhat mistaken.



I find the valve hardening interesting.  Periodic flow interruption or reversal might help but is obviously very risky and I can't imagine how this might be simulated in the benchtop simulator


familiarity with classifiers from machine learning COMP4702 (high distinction)
machine learning training experience with yolov3 object detection systems



Analysis Skills
analyse data benchtop model

With regards to gathering and analysing
Lots of experience with MATLAB
effective matlab skills
experience with simulink from first year

In a broad sense I imagine I I'd be looking at some indications that the pump was working harder with a reduced flow rate compared to when it was first installed and trying to improve the associated probability that simulated regurgitations existed in the benchtop model.

I find the valve hardening interesting.  Periodic flow interruption or reversal might help but is obviously very risky and I can't imagine how this might be simulated in the benchtop simulator



Valve collapse makes sense given the flow reversal. 
Medical imaging would be difficult 
heart movement
fineness of valves
surrounding tissues
even if the valve could clearly be discerned.  It would be difficult to gauge rergitation from it.

Valve hardening is curious.  I imagine that the valve being continuously closed leads to clotting factors and fibers sticking to the edges of the valves.  
Periodic flow interruption or flow reversal might ameliorate the condition but this also seems quite risky.




I hesitate to bring this up as it is very minor and I don't wish to make any comparison with the heart implant patients 
but I have informally been diagnosed as having a jugular venous pulse which implies that I may have some 
tricuspid regurgitation.  This makes your project a bit more personal than it might otherwise.





Thesis Supervisors

Konstanty Bialkowski microwave medical imaging
Pauline Pounds hamsterbot, funny
Alina Bialkowski computer vision for safety compliance
Marius Portmann blockchain
Shakes Chandra machine learning applied to MRI, 
Lei Li shortest path computations

https://student.eait.uq.edu.au/projects/?semester_id%5B%5D=7020&school_id%5B%5D=itee&q=&sendButton=


2020 Semester 1 Thesis Options
How to apply
https://www.itee.uq.edu.au/thesis/selection

Best Options
Classification of Aortic Regurgitation in HeartWare HVAD Rotary Blood Pumps - EAIT Projects
Computer vision for distributed solar PV array location - EAIT Projects
Attacks and Countermeasure for Anomaly Based Intrusion Detection - EAIT Projects
Reasoning about properties of concurrent programs using a theorem prover - EAIT Projects
Whole brain myelin mapping and fibre orientation assessment using MRI - EAIT Projects
SmartPingpong - EAIT Projects
Practical techniques for effective AI and machine learning in language tools - EAIT Projects
Robotics Simulation using MuJoCo - EAIT Projects
[Interaction Design] Co-Developing Application for a Men's Shed - EAIT Projects

Other Options
Astrophotonics : searching for exo-planets - EAIT Projects
Ultra Wideband Radar Target Recognition: Extraction of Resonant Frequencies from Frequency Domain Data - EAIT Projects
Next-generation lasers for ultrafast communications - EAIT Projects
EAIT Projects - Students - EAIT Projects
Bushing condition monitoring - EAIT Projects
Girls and Computer Science - EAIT Projects
Image Reconstruction Framework: Computed Tomography - EAIT Projects
Book of the Dead reconstruction - EAIT Projects
Coral identification - EAIT Projects
Simulated magnetic resonance data sets for training deep learning networks in image reconstruction - EAIT Projects
MRI undersampling reconstruction using deep learning - EAIT Projects
Embedded Systems Super Thesis Project: Farmbot Acoustic Sensor Array Classifier - EAIT Projects
Embedded Systems Super Thesis Project: Farmbot Crop Image Classifier - EAIT Projects
Embedded Systems Super Thesis Project: FPGA RISC-V Softcore Processor for Python and Lua Interpreter for controlling a CNC Machine - EAIT Projects
Embedded Systems Super Thesis Project: Outdoor and Indoor Activity Tracking using GPS with LoraWAN and Bluetooth LE - EAIT Projects
Software development for MRI image processing - EAIT Projects
Designing and Developing a Social Media Presence for a Library Concierge Robot - EAIT Projects
Understanding the Human Perspective of Autonomous Vehicles - EAIT Projects
Levitating Light - EAIT Projects
Underactuated Robotics: Katita Walks The Line - EAIT Projects
Economics Engineers Ethics I: Petrol Options [NEW!!] - EAIT Projects

Blue Green Algae in UQ Lakes

Sharon eait faculty of engineering uq
Vice Chancellor
Jacinta properties and facilities department
UQ duckspace

Diatomix
Competitive inhibition of blue green algae by encouraging the growth of diatom microbes.
Diatomix representative reports that 
properties and facilities current plan is to wait 2-3 years then pump all the water out of the lake, clean it, then replace the water and reintroduce the wildlife at around $2-3 million
https://algaenviro.com.au/how-it-works/
Diatomix solution costs approximately $30-60K per year
Dr Simon tannock


Prentice Building Level 2 
Helena Malawkin 33651587 sustainability@uq.edu.au

COMS3000
COMS3000_W03_Cryptography.pdf

COMS3000_W03_Cryptographic_Hashes.pdf
pre-image attack.  for a given hash try to find a collision sided dice
collision attack.  much easier: birthday problem
md5 sha-1 broken
sha-2 (up to 512 bit) and sha-3 considered safe
in unix passwords are stored in the shadow file which has restricted access

COMS3000_W04_Symmetric_Crypto.pdf

stream ciphers
predominantly RC4-based systems which work like the one time pad using a pseudo-random number generator.  RC4 based cryptosystems include WEP WPA WPA2 bittorrent SSL SSH PDF, RDP (remote desktop protocol), microsoft point-to-point encryption
very simple to implement, some vulnerabilities have been discovered. AES is recommended as the better option.

block ciphers
usually work like feistel ciphers.  the left side is encrypted by xoring the left and mangled right sides then the two sides are swapped.  This goes on for a number of rounds.
L = L xor mangle(R, K); swap; repeat n times; swap one last time
decryption is the same as encryption
DES and AES. DES has a 56 bit key and is a bit iffy.  Brute force Meet in the middle attack can break it.  Triple DES has an effective key strength of 112 bits which is considered secure.  AES 128 192 256.  AES instructions in newer processors.

ECB mode


Block Cipher Modes…


Public Key Encryption
Ke <> Kd

generator g, large prime number p, secret number x,y
all calculations are done mod p
alice and bob calculate g^x and g^y and swap these
the shared key is then K_ab = g^xy

there is no known efficient algorithm for calculating the "discrete logarithm" of g^x or g^y so Eve can't calculate x or y or p

RSA





new laptop
tesla turbine, tesla valve
Multivector Rotation

Top - 3 dimensional multivectors form an 8 dimensional space that subsumes real, 2D, complex, and quaternion maths.
Below - rotation test



Video Games
Handmade Hero Videos - Youtube
https://handmadehero.org/watch
Aeroponics
The main challenges are infection and pump actuation.  Infection can be controlled with temperature.  
Pump actuation: relay, pump
centrifugal pump AC induction motor and gravity pressure fed system - expensive, not very scalable, reliable, used in industry
Vertical farming has different pressures at different heights.  This means that pressure should be regulated by varying the size of the pipes at dfferent heights???
This means the system is less modular.  The pipe system has to stay in place.  Would this do the trick???

Left to right, 5 Gallon bucket aeroponics,  peristaltic pump by Great Scott,  Motorized Valve for ½ inch pipe $1000 from RS Australia
5 Gallon Bucket Aeroponics - The easiest aeroponics system to build - Full Class HD 
peristaltic pump - Great Scott 
centrifugal pump AC induction motor
Motorized and Actuated Valved - RS Australia

Arduino Stuff
There are 9 Arduino Irrigation Projects listed


UV Background Dose Estimation
It's challenging to estimate the ionizing radiation dose due to solar UV radiation.  

Assume solar power ~1kW/m2 = 1000joules/s/m2
If we assume that 1% of solar radiation is ionizing uv and that 0.1m2 of human skin is bombarded that this radiation is spread out over 1 kilogram of tissue then solar UV is roughly equivalent to 1 sievert per second which is nuts.  There must be a mistake somewhere.


Left - 28 years of UVA sun exposure (cbsnews.com)
Right - average background radiation doses

Natural background dose is around 2 milliSieverts.  US citizens average 3 milliSieverts from medical proceedures.
A sievert is a joule of ionizing radiation per kilogram of biological material weighted by organ and radiation type. 



Plane Engine Comparison
Turbojet.  Turboprop.  Turbofan.  




Comparison of Gas Fuels

right - commonly used 20lb propane tank specs (emptygrilltank.com)

Propane has a convenient boiling point (-50C) so it can be liquified at about 10 atmospheres of pressure.  It will gasify at ambient temperatures so it'll come out of the tank spontaneously.  It'll produce water and carbon dioxide in roughly equal proportions (4:3).  

Methane, the major component of "natural gas" produces 2 water molecules for every 1 carbon dioxide but has a boiling point of -160C so it's a lot harder to liquify.  Methane containers are pressurized at 250 atmospheres.

Comparison of Gas Fuels
Natural Gas Tanks are pressurized at 3600 psi ~ 250 atmospheres of pressure
propane liquifies at -50C so it can be stored as a liquid at around 10 atmospheres of pressure (150 psi)
wood gas seems to be mostly carbon monoxide and hydrogen
Carbon monoxide 17 - 22% Hydrogen 12 - 20 % (fao.org)


Production of Methane by Sabatier Reaction (to do)
Sabatier reaction stuff https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=sabatier+reaction&btnG=



Modern Jet Fighter Comparison


Right - Characteristics of saab gripen, eurofighter typhoon, lockheed martin f-35, dassault rafale, and boeing super hornet fighter jets

Comparison of fighter jets
Gripen for Canada: How the five fighters stack up

Air show demonstration footage
FIRST LOOK - New USAF F-35 Full Aerobatic Demonstration! - YouTube
Dazzling Gripen - full 9-minute display Cosford 2019 - YouTube
Dassault Rafale Fighter Flying Display at Paris Air Show 2019 - AINtv Express - YouTube
RAF Typhoon at RAF Cosford 2019 - YouTube

https://en.wikipedia.org/wiki/List_of_countries_by_level_of_military_equipment


Study Plan Sem 2 2019

For CSSE4010 I will center my study around the sample exam and the textbook.

For COMS3000 I will center my study around the tutorials and the lecture notes.  There's also a handy sample exam in the tutorials section.  I just need to study concepts and understand them so that I can do mathematical questions and write short answer statements for questions which want demonstration of conceptual understanding.    All of these things are available in the COMS3000 learning resources.  I've already gone over the early lecture notes in preparation for the midsem.
I produced these notes.


CSSE4010
40% exam
resources (in order): sample exam, textbook, lecture notes, tutorials, 
Sample exam CSSE4010_sample_exam_229.pdf 
Textbook :)
learning resources https://learn.uq.edu.au/webapps/blackboard/content/listContent.jsp?course_id=_124803_1&content_id=_4242942_1&mode=reset
past exam papers https://www.library.uq.edu.au/exams/papers.php?stub=CSSE4010
solved exam papers https://www.studocu.com/en-au/course/university-of-queensland/digital-system-design/214265
uq attic  https://drive.google.com/drive/folders/0Bz1jLGzgQnjtdUFqd3NfNHM3aTQ
course outline CSSE4010-Course-Outline.pdf

COMS3000
exam 60% 120 minutes closed book
tutorials  https://learn.uq.edu.au/webapps/blackboard/execute/content/blankPage?cmd=view&content_id=_4671663_1&course_id=_124250_1
Sample Exam COMS3000_COMS7003_exam_practice.pdf
uq attic https://drive.google.com/drive/folders/0BxNXXVkg0NKiNDNlZDQwYmEtYjRlNy00Mjk1LWIxMzQtNzc2YTdkN2JhZDA5
reading list https://uq.rl.talis.com/lists/A1215825-347E-1763-C146-B49693C16E5A.html
past exam papers https://www.library.uq.edu.au/exams/papers.php?stub=coms3000
lectures https://learn.uq.edu.au/webapps/blackboard/execute/content/blankPage?cmd=view&content_id=_4671662_1&course_id=_124250_1
learning resources https://learn.uq.edu.au/webapps/blackboard/content/listContent.jsp?course_id=_124250_1&content_id=_4240995_1&mode=reset
COMS3000 Topics from Past Exams
sticky bit in unix executable file permissions.
md5 and sha-1 cryptographic one-way hash functions



vigenere cipher  decryptions
digital certificates - validation
TLS handshaking - nonces

share secret key diffie hellman protocol
wpa wpa2  

Final Exams Notes
coms3000 exam is closed-book
E.g. 4 marks:
“Demonstrate how to calculate the
Shannon Information in this coding system”
Correct formula – 1 mark
Correct values into formula – 1 mark
Correct working – 1 mark
Correct answer – 1 mark
similar to tutorial questions

Plan 
4010
use 4010 textbook to answer practice test questions
go through lectures and textbook to study

coms3000
go through past exams, find common topics, 
learn about them from lecture notes, videos, wikipedia, etc.


So basically just go through past exams to find the list of topics to study then study them


Exam Plan


work from final exams. try to cover 1 week per day. 
2 hour of coms3000
2 hour csse4010 - use lecture notes.  Go into uni.  Have coffee at lunch time as reward



Final Exam Timetable
Semester Two Final Examinations, 2019
Personalised timetable for 44886356 for Final Exam Timetable
This personalised timetable was set on Sunday 29/09/2019
 
 
Exam
CSSE4010 Digital System Design
Date
Saturday 09/11/2019
Time
4:30pm
Duration
2 hours plus 10 minutes reading
Campus
St Lucia Campus
Venue
Gordon Greenwood Building (32) - Room 215
 
 
Exam
COMS3000 Information Security
Date
Monday 11/11/2019
Time
5:45pm
Duration
2 hours plus 10 minutes reading
Campus
St Lucia Campus
Venue
UQ Union Complex (21) - Holt Room
 
You are logged in as s4488635
Log Out
 

COMS3000 Information Security STLUC 11/11/2019 17:45:00
CSSE4010 Digital System Design STLUC 09/11/2019 16:30:00
CSSE4010 Project 1 
https://reference.digilentinc.com/reference/software/waveforms/waveforms-3/start

FDRE is a flip flop https://www.xilinx.com/support/documentation/sw_manuals/xilinx13_2/7series_scm.pdf

synthesis level schematics https://docs.google.com/document/d/1sYknGCql2We-A6E0yXTEj8oZkTWg3vfTPlIJAU9X-PM/edit





Timing Summary


Implementation Block Diagram











Critical Path Diagram 4.230 ns slack

Resource Utilization



Detailed Resource Utilization





Timing Analysis of Critical Path




CSSE 4010 
Schematics
Top Level


Curve Calculator 1/2

Curve Calculator 2/2


Data Store


Data Output







Critical Path in Cordic in Curve Calculator







Waveforms Logic Analyser Spectrogram



csse4010_7410_project1.pdf
4010 pracs page
Digilent OOB Demo
Nexys 4 Datasheet

Re: difference between orange and red signals in a simulation wcfg file  https://forums.xilinx.com/t5/Simulation-and-Verification/difference-between-orange-and-red-signals-in-a-simulation-wcfg/td-p/756306

Re: Initializing BRAM
You need to understand that a BRAM (or any other RAM) does not have a "reset" that will cause all locations to go back to the initial value.  The initial values are loaded from the bitstream during configuration.  After that, if the RAM data has changed, you would need to re-write the initial values sequentially.  For external memory this usually happens when you run the boot-loader.  If the MicroBlaze is running from external memory, then the best thing you can do is never write to the internal BRAM memory areas that contain the bootloader.  If you need to "scrub" the internal memory to get back the original data, then you either need to do a partial (or full) reconfiguration, or you need to add some other RTL that re-loads the memory from the configuration flash.



https://github.com/Digilent/Nexys-4-DDR-OOB/tree/master/src/hdl
csse4010_7410_project1.pdf
file:///C:/Users/s4488635/Downloads/CSSE4010/project_1/project_1.sim/sim_1/behav/xsim/xvhdl.log


To Do ENGG3800


jlink programmer (edu version) https://core-electronics.com.au/j-link-edu-mini-programmer.html


TP2 Final Report https://docs.google.com/document/d/1XhSZSm09v-bglywgHyCAYSW2k5qPeYLiXzncEVh8QSA/edit#

https://www.one-tab.com/page/IPUQXI9lT3y1kCLz53gLRA

product info https://learn.uq.edu.au/webapps/blackboard/content/listContent.jsp?course_id=_124470_1&content_id=_4607283_1

uv/latest-index.txt
uv/latest-sed.txt

files must have UV index followed by a comma, and then the SED
	<uv_index>,<SED>

SED S = t × 0.25 * uv-index    for demo day  (Actual SED - accumulated dose SED s = t * 0.025 * uv_index / 100 where t is in seconds)
save SED in file
save last measurement in file

measure then sleep 60 seconds


fitzpatrick type = not yet specified


fix file structure

turn on blue light when SD card access
lint embedded code

indicate if MED > 40%, MED is in units of SED


DONE
https://github.com/eziya/STM32_SPI_SDCARD
reinitialize SD card after reinsertion with interrupt on card detect line
https://stackoverflow.com/questions/40057581/stm32f3-discovery-implement-gpio-interrupt
put interrupt on SD card card detect



18 October


16 October 
politic - late Middle English: from Old French politique ‘political’, via Latin from Greek politikos, from politēs ‘citizen’, from polis ‘city’.

http://userweb.eng.gla.ac.uk/scott.roy/DCD3/05_Arithmetic.pdf
https://www.ics.uci.edu/~jmoorkan/vhdlref/arrays.html
https://github.com/Digilent/Nexys-4-OOB/tree/master/src/hdl
fsm https://www.allaboutcircuits.com/technical-articles/encoding-the-states-of-a-finite-state-machine-vhdl/

CSSE4010 - Review Lecture Notes

Q datapath and controller
bus address lines, chip enable
Q stacks implemented in memory
rise time fall time
Q propagation and transitional delays caused by different circuits, determines the maximum operation speed of the circuit
Wk9 tutorial CMOS  NMOS PMOS, field effect transistors -
wk10 not examinable
wk11 not examinable
asm charts not examinable

Final Exam
4 questions: 3-5 parts per question
  dot points
lots of drawings
:) hard to finish
similar to previous years (2015 onwards)

2018 and 2017 exams

15 October
https://en.wikipedia.org/wiki/Two%27s_complement
for loop https://www.nandland.com/vhdl/examples/example-for-loop.html
conversions in vhdl https://www.nandland.com/vhdl/tips/tip-convert-numeric-std-logic-vector-to-integer.html#Numeric-Signed-To-Std_Logic_Vector
https://www.xilinx.com/support/documentation/ip_documentation/cordic/v6_0/pg105-cordic.pdf

bcd to binary in VHDL from vhdl guru https://vhdlguru.blogspot.com/2015/04/vhdl-code-for-bcd-to-binary-conversion.html
svn repository http://source.eait.uq.edu.au/svn/csse4010-s4488635
Nexys 4 XC7A100TCSG324-3


https://learn.uq.edu.au/webapps/blackboard/content/listContent.jsp?course_id=_124803_1&content_id=_4242941_1&mode=reset

do curve calculator

a = 2, b = 1


a = 2, b = -1

12 October 2019

[x] write to appropriate file

calculate sed
http://elm-chan.org/fsw/ff/doc/readdir.html
needs lock to be off.  I think the lock puts a cap on the number of files that can be open at any given time

11 October 2019

ENGG3800

Style Guide
CS50: Introduction to Computer Science from Harvard Style Guide https://cs50.readthedocs.io/style/c/

Embedded - Sources of Code and Licensing

The sprintf_float3 function was rewritten from a function listed here 
https://stackoverflow.com/questions/905928/using-floats-with-sprintf-in-embedded-c

The RTC_ToEpoch function was taken from this repository 
https://github.com/LonelyWolf/stm32/blob/master/stm32l-dosfs/RTC.c
which is free to use commercially and/or otherwise under this license http://unlicense.org .

Demo code from the fatfs website has been used, notably this function
 http://elm-chan.org/fsw/ff/doc/readdir.html







Reports say that about a 1uF capacitor between 3V3 and GND is optimal
Repo
git clone s4488635@source.eait.uq.edu.au:engg3800g02
https://source.eait.uq.edu.au/gitlist/engg3800g02/master/

spec UVDose%20Specification%2023-09-19.pdf

Goals
increase reliability of sd card
mount every write
check status and loop 10 times
write to folder without chdir
read RTC clok

Stretch Goal
calculate SED
detect SD card insertion 

CSSE4010
check milestone 2 goals
first long term - draw circle
prototype in one file
testbench all items in one file
continuously redesign top level block diagram
Machine learning notes
https://github.com/nicolas42/alexeyAB-darknet/blob/master/bitwise/README.md
also good info in github.com/jctechnology/jctech-ml

It seems like the data I have saved on EC2 is costing me money.  I should delete the instances I have 
elastic block store costs
https://aws.amazon.com/ebs/pricing/

Weekly Events at UQ
UQ Computing Society meets Thursdays at 4pm
Hacker meet Fridays 6pm
Piano group fridays 5pm



CSSE4010

	constant scaleWidth : integer := 20;
	signal clockScaler : std_logic_vector(scaleWidth downto 0);


clkdiv is running at ~95.37 Hz
100000000 / 2^20 ~ 95.37 Hz

I'm going to 
funnel that into my state machine and see what happens, but first I'm going to 
edit the constraints file so that it has the same approximate port mapping

Add this to the top port

	       JA7 : in STD_LOGIC


Constraints file settings

set_property PACKAGE_PIN B13 [get_ports {logic_analyzer[0]}]					
	set_property IOSTANDARD LVCMOS33 [get_ports {logic_analyzer[0]}]

set_property PACKAGE_PIN F14 [get_ports {logic_analyzer[1]}]					
	set_property IOSTANDARD LVCMOS33 [get_ports {logic_analyzer[1]}]

set_property PACKAGE_PIN D17 [get_ports {logic_analyzer[2]}]					
	set_property IOSTANDARD LVCMOS33 [get_ports {logic_analyzer[2]}]

set_property PACKAGE_PIN E17 [get_ports {logic_analyzer[3]}]					
	set_property IOSTANDARD LVCMOS33 [get_ports {logic_analyzer[3]}]

set_property PACKAGE_PIN G14 [get_ports {logic_analyzer[4]}]					
	set_property IOSTANDARD LVCMOS33 [get_ports {logic_analyzer[4]}]

set_property PACKAGE_PIN P15 [get_ports {logic_analyzer[5]}]					
	set_property IOSTANDARD LVCMOS33 [get_ports {logic_analyzer[5]}]

set_property PACKAGE_PIN V11 [get_ports {logic_analyzer[6]}]					
	set_property IOSTANDARD LVCMOS33 [get_ports {logic_analyzer[6]}]

set_property PACKAGE_PIN V15 [get_ports {logic_analyzer[7]}]					
	set_property IOSTANDARD LVCMOS33 [get_ports {logic_analyzer[7]}]


##Bank = 15, Pin name = IO_0_15,								Sch name = JA7
set_property PACKAGE_PIN G13 [get_ports {JA7}]					
	set_property IOSTANDARD LVCMOS33 [get_ports {JA7}]










