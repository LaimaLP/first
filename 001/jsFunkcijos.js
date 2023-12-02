//1 Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;

function first(text) {
  return text.toString();
}
console.log(first("laaaabas"));

// 2 Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log,
//o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

const number = 5;
function second(text2, number) {
  return text2.repeat(number);
}
console.log(second(first("laaaaabas! "), 5));

//4 Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)

function four(n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}
four(12);
console.log(four(4));

//5 Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77.
//Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.

function getRandomArr(min, max, riba) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const arr = [];

  for (let i = 0; i < riba; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return arr;
}
getRandomArr();
console.log("penktas su trim argumentais", getRandomArr(33, 77, 100));

let arejus = getRandomArr(33, 77, 100);
let dalikliuArr = [];

for (num of arejus) {
  dalikliuArr.push(four(num));
}

arejus.sort((a, b) => {
  const dalikliuSkaiciusA = four(a);
  const dalikliuSkaiciusB = four(b);

  return dalikliuSkaiciusB - dalikliuSkaiciusA;
});
console.log("arejus pagal dalikliu mazejima", arejus);

//6 Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777.
//Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.

const uzd6Arr = getRandomArr(333, 777, 100);
console.log("sestas visas arejus", uzd6Arr);
const uzd6pirminiai = [];
for (const number of uzd6Arr) {
  if (four(number) === 0) {
    uzd6pirminiai.push(number);
  }
}
console.log("uzd6pirminiai:", uzd6pirminiai);

//7 Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra
// atsitiktiniai skaičiai nuo 0 iki 10,
//o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas.

// Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų.
// Paskutinio masyvo paskutinis elementas yra lygus 0;

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let masyvoIlgis = getRandomNumber(10, 20) - 1;

let dynamicArr = getRandomArr(0, 10, masyvoIlgis);
dynamicArr.push(0);

for (let i = 0; i < getRandomNumber(10, 30); i++) {
  let newArr = [];
  newArr = getRandomArr(0, 10, getRandomNumber(10, 20) - 1);
  newArr.push(dynamicArr);
  dynamicArr = newArr;
}
console.log("dynamicArr", dynamicArr);

let repeats = Math.floor(Math.random()*10 + 20);
let asd3 = [];

for(let i = 0; i < repeats; i++)
{
    if(i === 0){
        const temp = new Array(Math.floor(Math.random()*10+10)).fill(1).map(el => Math.floor(Math.random()*10));
        temp.push(0);
        asd3 = [...temp];
    }
    else{
        const temp = new Array(Math.floor(Math.random()*10+10)).fill(1).map(el => Math.floor(Math.random()*10));
        temp.push(asd3);
        asd3 = [...temp];
    }
}
console.log("asd3: ", asd3);

//8 Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.

//9 Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33.
//Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33.
//Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento.

let devintas = getRandomArr(1, 33, 3);
console.log("devintas", devintas);

for (const number of devintas) {
  if (four(number) !== 0) {
    devintas.push(getRandomArr(1, 33, 1));
  }
}
console.log("devintas2", devintas);

//10 Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite.


"dssmtmrkonedbbhdhjbf9hq 2njsevenszzsfltconesixhsflpbpd 6shgbprkpbksnfourfivemvncvg2eight eightseventhree7lfqpnclxnnineninemgkjtqksrdone bsxxzhkmmfcslmdhhrgf9seven665lsknmbpgj 9fourfiveqjv4sxdbpcj77 24twoonefive threesixfiveonefour36nggvfvdkzsix zvoneightngnpvvq8mpmsdjmvznrntwo fourbdqlr7pdqvhnjfnbrcnd8 jtdvqdsixkfnmlrxc58 dgcvchcdmksvqhdqvs29onenddxsqseven dqc57tf1xmkdnll cndpcrpnssix4fourxmdkreightvtxflcsg6 5qnnsvrtwo1ninerzmtkdcm8six 43onegx3ddqrp six76hljnssix8 six4kzjdcbbbhvnineseveneight6sevenfive 4rx6tpghlcgf 67mcmfive1sixonefive 97two19 six7ninetwosgtrpsqzltmjqkghrgbninexnmbbj pvxbdnqlvnx5slshseven748nine six9234pg7ninehmvrhxhhrc qhzp72twopxttldgmvqthgdnxhvht2nine 8865zhhzgmzbglrmtdpdrt7 7874 fvmzfsck614 2nine73eight4five 2threefivengnvkrzmg6two 21pzrckpscqnineseven dpcxmtdhrkjcvxqsrsl7fivehtfljvjh 4dqhvlfmjfive14 qzhmmsqfc7 3kbklxmh eightf1mhkbdl4beight4 k5rbcsrxtgd1vfhzmltqtcgmcmgtdjtxk 9ldshn2twothreetwocmqjfourfxhb fkjpjmtvrz7fcpfmvbmlxn xkvzhqj75 one6rzeight61eightrdxgsdxx4 htfcnddhsl2d9zgqbdmfzsixtwosix ctvrqbrrzg3nine2dhbrmcs slcfsjt232fivebmjtdqfivempxzzhmmx bxqvkfour3jfkkqttxgsclstjg five5fournghbgprmfninephcmfzxksvqfvklrcnqnk sixrthreeseven74oneightssl gzd2l8seven qjvhxbzdp311sixonetwo hljdmsjbhclftbzqmtg636229 9sixkmljpgnc6nbjmpgsstjrzhlsdck 23slthree36qngbd 6seventhglqeightcqltbdjxponefive preightthreeqk51 pnhcr27ninesevenbvllhkdxc1 zxrnhmthree4rlbhkzfl2 djcz9foursevencrhgsxkkbln lmdvnnmjkg4qdcdkseven 3rfvvnlp9pdjnxkqtv5bnpfzdcv cgnjnsnj1kvdlzdjvtjgkptjsevenhmmxxlone kzxt29fivejhbddgbncbvdqzeight 6ninefour 7nxlv fhdftpbb2vqqbtnjrjb8hmfks8 7bgkfthree twozxfknjnrmv99xhddsqrxs twogndc12dgcghk 1cnxptqttrfmr 45qsmt 213 twocsfzd1eight7eightwovm pgeighteight9mkhghqzfl2fourtwo jone7rblvhhp7 hszhp3mthqnlvkconesbcjhjpv9vz ninenine63four4 4sqkfqznfrmkgbspmb 2fourdgqzj 2one99 drkmbr98fckdjfivetbsrrrpq8pjdkztlhglr 6cbrzrndxsevenoneightzzd sevengz2dggbt446six2 8ninezmpbklk8ninedfmzrg bpcfzztwo252 63ninesixhfmd3ddkdrjd2one fkhnineninejb4tkhzjj 9rnjqlpq 59grlcvfgsvxrt2vfhbj4 3smcnkjdgmnx sevenvrtgzmtkrreight6seven4 twoseventwo9lsd one41tvgttqnm1791szxcjbg fourxkslzzbboneseven1 cxszrgsix8nx sixrgbzdccx8three3four4m nine5jbvqnmxvmhmfzcmtvq4 25four5 seveneightthree9 twoz94nine6h5zq 2fourfourcjctlzzbhcqmn84nine seven4vgnt mxpdsfcngvppjkmbjsmfourqgmnqfclttbg75bpsb ntrklveightgdgmjbcdfkckqlpjmthreesix3 1xx8xhdnmkjttseven zzoneight8586two 9fhrxkn1 dgh22sevensix 2zjmxzdskhf 47five66jklg9 mdcfiveqhnzb97csf fiverzrtglhl442sixthreenblbkgs7 27 four61gmkgz six3zt76five63 nfrmmgsix1zqnkt1xqdtxh4 43onenc95seven7 5qkfjqntwoone5 32twofivenineqjbncqnx1two lkp4ljxmthree lfvtfjhvkmpbtxrfourfn7trfgjchvv4fivesix twopcznrsk2qxjjvzcbzjg8 eight2ztjfxgkz1sixthree57three gfhctvvksix855qz1 six5twovfdpcjpbgntzkp9four 3seven4five9 3sdnrjhsvfive7dbllppvfgx9four 1seven1cktwopzqdnshfsthctvh7four fiveninebcjmbrlqjfvqnrpnkvlxmdd4fivepxqrlnine jfpvt96three seven9one5foureight 5five6 eightfourone6fivenineeightxjfzcdftrdlngr six1srccrmnqpdljxthreelcxm6 ztjjxbnphhtpfdhgshmvnine6one27nzvrmpltnine frtwonelninethreef8jpbcnmftspone zfff655jjjjfkldpffvpk 82vhsgkghljkvkd eightthreethree8 sevennjlmhthreekzcpnqcfjnxb4fivefive1 nzrbjttzlgxfrrsq5xzxfive three8mvklnseven9 four46vksr9three4four4 586 four43frone 48sixpqlppsix4 6xtvvsnhzkchlsl7five7bnhdtwo seven9mqkfkff 6ftv ddfg63 ninetwosevenrlvztsffrz9 mbrxpsjb12bshdbbkkl712 6threeseveneightvkqflfp8six3twonebq 1bdmfshjpnl 2844sixpvxsvqrzd4sgrbseven 4p1ninelkhnldgbnnseven8one hcdqslfourthreeeight6nine3 7slfqgxpvbtvrgthjtgmn4ltkone bsfkkbbzdz6peightnineeight 1rzpjjffxpq28qthqtbbfv fourtwo8lkfbdvlxbs8tvcm eightfoureightsevenhbqtmffnfjlsvdxxfcfbtbxhlzhvt7 dsspzhdf7sevenpb55 pfxronenzjlvjzqjqcndbsrsjjslx486xtrr 35hsqdnine94gch 74kc7q27 fourtzhronethreesix285 hhlqg4two8tcsztwo three5ninesevenfivehgbvlkhvvqz nineqqcqvbqmxk49pcxpmlqqjpskqkrgnvvnine cjmxkq527 45dxdxvntmxtwolcdcdxmgf8 gkrrn197jgf6fcldbkqmkssix dbzsdcmmk6threetwosevenhxxhmmptjghxzdfive grq2threesix7xkgqnp1 kplsrsblmthreesix6eighteight4hmtn9twonec xzx93 szcsc351 foursix84sevenqqd 42four45sqgdkeightzbsprvs sevenone47 bcqjlfbkl353eight 76j1rcvgglnlm dggsztbr7kxkdnxmbg twocgqcvgsctwoninecnkmfour9 vsldbggseven3one 996nrqrmcszm212 hrkhqsdddsrzgkkglqxgblfvt8zmpgrdbpbnvsdbcfour54 95threeeight9tnszp3mpjkpjjr 5qdp qglmnkz9two8 kh8xsl9dhfkfdlp 59xrljx3 twoseven47qhxvscpr2six4eight jqvfiveonesevenzbdtdpt9qbnlfour 1nine23 threemzxlm1fiveg one464sixmncqbb mlltlhcx6ghxhmcrn 64bkkxkrbjbjqcdfgrxqeightkshfrcxp 98qzpmrgxsmsseven9spdgldvxfmzgqonesix zfhzkcbrqh2seven8 pjxhfsgghd3 4xxvkzhlkhxvsdfives4 zgpcdrdxtfzrzmt87five 2bqdd5twonine 2sixdrgccvgstc ltbfour2jzpkqr one21 19kjrjmrdfcpqdvgjsnine one75four jdrpfour7 5vdtdsqfourfive stwonefiveeightztc2five lbdxblhz96zvlsqzppztwoqjjhdrffv dvgrpzbtqg9bxcrzpnxffhhspdn9seven2 eight5fourone 7fourthreec lggphtsqmgbmfxbkgn77 8lvjthreetwo 2bdnscpfour4 8eightlvc8ndtnf5eightwon fivethreenbsz8 ndlpfslspgdthreefivehbbqseven6sixbtrgmzcm seven13four6four7gx7 lhplnpttwo18qmbxzsqsm 6fvq5gfhmcnjzl 91fourninenine4one5 9sixbbzxffour9twohpvzmqlqhrmbcbfbsl 46ninesix9plqzsmftmpfpqtn8 ninemccd4five3qltqljzkz21jmcrj fivejvtsvhtdeighthmmeighttwo1 sevennineonesix8vtqkmqqlone7 2ninebmmkvzkk47gjk fourtwo9qrthree5 9six6four3 cmeightwo6lthth1cpclsptwo258 jmrqtwo1two5 fourtwo64pmfrftrgpfss2oneeight 7hrhxq31 jkk9seven5lkhflxk 3seven1rdqk9 two5mvnqbdcgg584 lbphxlhsntdzr2 one6threeonefivefvftkmlszl 5tvgql 7two33xgjsjkvx5nine6 jcn7eight four435six sevencsrtkfmh6 eightmvgrrqgqftjdk3mrfourthreefivef 5sixsix53two8 eighttwo9eightrdcjr xrtscrone2jvcdk97flfjm63 sevenncz7bcqznctsvptfzsct ninefkplkdqonedmsrqfjzs8 two32mmtbggnpxcp7tg25 sixzeightrsg8vdt8 eightzqpgjmfour63 4one2six ninexxrqmbj9lmz8htsix jkfbz1frmnztcfour9 zeightwozfsgcsbcjf6nine4five5sthreenine 6fivesixhfqsbcceighttwo 4twosix56eightkklcmxn fivetwozmhhgs47four1spjxkm lbmn8twotwolcmctgk three85 njdzndhqnd5three62dp4six three6fivehfb5dnljxtqmfourone9 bbnvsslkzfour6one ceightwol7sevenfivethree 7hpzd89pvlbt5 nnvqfptmtpp8qlqfivednine39 qoneightfourgvz6sixone 9cdvtsnine seven3eight6 1rxzvone 2two1dqpvkkrnrzfjpzvcnltv4 oneeightslplpbghzceightsmmrnonesix9seven 5ninexktvoneninehgdv eight7sixxkpcxvlsneight5 twonine217 fkcxklz1sevenseven6fiveone9six 676sixeightpsevenfourpnqhgc threefour2fn hkfourhthvlkbknlxbrftjjcrsvzzvpplfjpgpg9kddvkgcszn 1fourthreeeighteightznj7 one22bvjbvxjkfive18nine2 ccxzfsqc8ltkbr7 7sixntfhjflgvl9fivegpfql1 9seventhree2 9xksmtnjkgc76 rr61four 6ninenineztgcninecxgpvxptlninebdvhjxjgpzc 9nfhdvlvmkgninedxppninenine14 cmvlgmzxsixeight77twotwo hhzsgrxbl4five 31qffcfdkvtfivekmrgkdd1 4l2sixz8 gdcvfpjxqmznngrm4pnlfour2ninetwotwo five684 threegtmmlcvlbxdp4sixtwoneq one5zdlhtcdfvdsgjxrfq four1nine7 13sfr91 5eightfvgkhnnqpxqhdrfrpzgqlvpkeightpdqjjgmdqp44 one67 kmdtnkrxg8bdxfzrckpp5ghpmvskfourthree 531xtmqrtwo 1threenvzdptbkldmvclhxzvbcggtxfzhdtpfqbsix 42nnzsgqgrvnvggqrvrcpdeight cqkzc4fourthreefour7sixgrfour jtcr5onehjfrrzfdpzzjthree652 ninefgbqdphnrzddhtvqpgmnfivenine3 lcrvln73three3jdnxzslxcfiveone threexqcsrfcjrtwo2four 3txhsevenqtbksgzjtwoctfcbtsrg onethreeoneeightcv42zdtwoneml nineseven42one 2flfjninesix2one32z 75ninescskjtmljeightkspspsfz nq9oneightsgx 4ninesixmsix2dgxdc 6mlptkdqsxblnjltdcczfnlfpsix9 eight7onenxzfpmvjsvspfdvgbzvvp3nine nine3fmvgbsseventhree6 csrcmjreight6 5twofour3fivezhseventwokdklzg eight4two2 2threefivemz twothreesix1 fivezcdkmdrjmh82ninetwo 44jfvkbsdhl eightkplns7b1jtjone9 qfrncbdbkdseven5lrshgtbthreetwo nine7gqp1 sntjvhqpz34three8 g8eightthree3fivevxszpstwonelr dklkqkfoursix5eight41sh vfour2kcc88 one1bnpfnineqthmfmr ch9q32nonezrnsdhxqms 27pcpfrtqxgbxcninefour one2grtjztkngkkvxmqg threevnvjptrcgfourzeightsix2 xvgsfivehspdcxnncsfivesix24 7vgmnmfone55sevensix2 four575dmbrstkp58mgbs zhksthreeptqzsfd5 sixfive7 sixnjgvkzmmvthree88seventhreefhc5 5ninesthkscgzqxgpchzvjbxrhrbmnqfrvcsix sixrdxxhld5 bfdxttkrqsevenktchmtwo43 zt9threethreeklsgdthree cgqsvpgnfldfxzbvm4glmxmbjsixeight fpbpdrms94 jbhxtddlgseven4threelqztckdtjksevenone2dpmqcqhbrk 88twotklvhqxqgkrgbfntrlfsfour9 6nine6 92four6 smvfr622lxqdfhnljfjhsmpxzpxvhb9 zxbplbxdsevenninehdeight8 2ninembpclonezlkqmmtcrdc 5two3njgngbvblvj75seven threeseven8six nine2four98five 1dplqqcvrctjxvqhtprsixfourfourdqjr 4fourqrkzzjcnn seventwosixtwo8 7two6vmjmtpjv hnqvtone4 five28sixhsztjrdmc4twonine 88six jfczdhzvmhcmrqzbslhlnp5tzrzv 2bs1mjbhsspftfiverncctjktfczxlx 7zxrxkltqxsevensevendzhcfive99two 648fcdfmtjxcbl 8seventhreevqrq4psrk three1jzvhfbsjn7eight1 bskckjnkgjxzlqxlsix9dqstkh 77eightxbqhqbzbfive6jjnqbdhz2five kbdoneightmchpzkxbrtddnfour7clkgfvq6pbdbppfzfive ghnpgrjkthree93ninehgskzrvsvpfour sixseventwovtnfour5x ccn24shbqrvrpfivethree 3fourtzdjqtvcmsrljgnqzsix98nine 7fivefourninelttflrkhv2kgdbs 5nmkrnvthree 5onetj 4brgvmfscxb3seven 7sixthree5 rkffhjbckhzcspcnineeighthpgjz2nine fcmzvnpdgckngfdlgmkmmsrcvft4kf twofour8eightseven jmzxl9v2 dltwonedvpsqv3 18ztdphsvqh54nhpthree3 786kps nine98lmqhtrkscglcpk5two sevenxkbmtknr4seveneight sixnine86five1sixnine threevbgp5rhxghnvzz 94sevenfourbcsevensix3one onethreezzdrlxl5lxqtwones qghxbxjkqgvf18pbdonefive ninedsq2mfmrmrcn dcclgjfvknqttvnxhcqtwoqdnzcmzqv4 zcxtlnxtndnjzvdh7 two46sixseven3 3six8fourninexqxqkfftkkthreefour fourcnkm6btfscdstwodjkgbgvmj fqzbrjpvsqbjthkfhhztpcbpfjlqszrjtwo7 zbmtvssixfourbjnfrf5 15rpnjmmxnkrtgsevenndsixthree 5eightone3five3snvcj two4sevenlcmgjfnltone4hklft vfhptr8dlqhgf7foureightwonp 3onencvhmxgj1vfour5onejlqbjv fiveeight1 one52ksevenn6 two68seven9eightnine8 thth374three xhmsqqbs5hpjtk znssdghfivefour3fivefml 3tsjlkvcbq2 six6895two17 three8sixninef9two sixzktghc4ksvrffs 4qqjxljz2ninesjjfdzjlrsixfour5two 9rdptppnkkc4zr21six7 jxzgeight4sixhlgjq7 ml3sixeight nbpgljsvlrcqknzmfnmf3ssg2six7zfldglglsdplbr 8319 czlzhlgbninefive8 8jkccgprsdg4ninesevenhsgrznseven sevenntwothreesixfour7 5bqnrmflnd11 9seven4five 9ggqzbngglkshcpzqsgbbgjmvjvgptd one1tdhlkln9cmgmmgx4 16qnxxg vvtbtcvvb1 two31qndvcxk6 4shnmhbxqzsvxq863threetwo 2qfbrstrvt5three 6vxhshgntkhsbgmrsk 4txmbbjndbp5 rkhszldlp5 18gkhjsbz6onerxkkv 5jjlnzqglkhtfnthree7five7hhvbrvjszone sevenfour12qzrltwogvtnrjtrcthreeone eightthree833 9nine…"

