// Di dalam js ada 3 variabel

// 1. let
let nama ="alfareza"

// tampilan data
console.log(nama);

// nilai variabel nama
nama ="arjuna"
console.log(nama);

//2. var
var tempat ="cilegon"

// tampilan data
console.log (tempat);
var tempat ="serang";
console.log (tempat);

//kelakuan let
let namaDepan ="mawar";
{
    let namaDepan ="melati";
    console.log (namaDepan);
}
console.log(namaDepan);

//kelakuan var
var tempatJauh ="jakarta";
{
    tempatJauh ="tanggerang";
    console.log(tempatJauh);
}
console.log(tempatJauh);

//3. const
const TTL ="10 juli 2007";
console.log(TTL);
//TTL ="11 juli 2007"; tidak dapat ditampilkan karena const bersifat konstan



// BELAJAR TIPE DATA //

let dataString="alfareza"; // STRING
console.log(dataString);
console.log(typeof dataString);


let dataNumber= 10; // NUMBER
console.log(dataNumber);
console.log(typeof dataNumber);

let dataBoolean= true; // BOOLEAN
console.log(dataBoolean);
console.log(typeof dataBoolean);

let dataKosong;
console.log(dataKosong);
console.log(typeof dataKosong);



// STRING (ESCAPING & LITERAL)

let data="data string"
console.log(data);

// 1. Literal String
let namaPanggilan="reza"
let tempatTinggal="cilegon"
let umur= 17

let biodata=`saya biasa di panggil ${namaPanggilan} tempat tinggal saya di ${tempatTinggal} umur saya sekarang ${umur}`
console.log(biodata);

// 2. Escaping Sting
let data1="reza berkata 'dimana lu'"
{
console.log(data1);
data1="reza berkata \t 'dimana lu'"
}
console.log(data1);

let data2="orang berkata \"dirumah gua lagi santai\""
console.log(data2);

let data3="reza berkata \n \"oke yauda\""
console.log(data3);




// OPERASI STIRNG //

// 1. char at
let dataString1="abcdef"
let dataChar= dataString1.charAt(0);
console.log(`character pada index 0 = ${dataChar}`);
dataChar= dataString1.charAt(1);
console.log(`character pada index 1 = ${dataChar}`);
dataChar= dataString1.charAt(2);
console.log(`character pada index 2 = ${dataChar}`);
dataChar= dataString1.charAt(3);
console.log(`character pada index 3 = ${dataChar}`);
dataChar= dataString1.charAt(4);
console.log(`character pada index 4 = ${dataChar}`);
dataChar= dataString1.charAt(5);
console.log(`character pada index 5 = ${dataChar}`);

// 2. menyambung string
let namaFront="Ucup"
let namaback="Surucup"

let namaLengkap= namaFront.concat(' ',namaback,' keren');
console.log(namaLengkap);

// 3. Mengambil index (kemunculan pertama)
console.log(namaLengkap.indexOf('k'));
console.log(namaLengkap.indexOf('c'));
console.log(namaLengkap.indexOf('u'));
console.log(namaLengkap.indexOf('U'));

// 4. Substring
console.log(namaLengkap.substring(5,12));
console.log(namaLengkap.substring(12,5));

// 5. slice
console.log(namaLengkap.slice(5,12));
console.log(namaLengkap.slice(12,5));// menjadi kosong //

// 6. replace
namaLengkap= namaLengkap.replace('Ucup Surucup','Otong Surotong')
console.log(namaLengkap);

// 7. toLower
console.log(namaLengkap.toLowerCase());

// 8. toupper
console.log(namaLengkap.toUpperCase());

// 9. extra data number
let datastring2='10'
console.log(typeof datastring2);
let dataInteger= parseInt (datastring2);
console.log(dataInteger);
console.log(typeof dataInteger);


let dataString3='10.555'
console.log(typeof dataString3);
let dataFLoat= parseFloat (dataString3);
console.log(dataFLoat);
console.log(typeof dataFLoat);



// NUMBER-64 bit //
let nilaiInt = 10;// integer - nilai bilangan bulat
console.log(nilaiInt);
console.log(typeof nilaiInt);

let nilaiFloat = 10.272// float - nilai bilangan desimal
console.log(nilaiFloat);
console.log(typeof nilaiFloat);

let nilai_big_int = 1321323888249194n// big it
console.log(nilai_big_int);
console.log(typeof nilai_big_int);

// bagaimana cara menggunakan data ini
let angka= 5.098;

let angkaInt= parseInt(angka);
console.log(angkaInt);
let angkaFloat= parseFloat(angka);
console.log(angkaFloat);

// menggunakan string
let angkaString ="100.98"
console.log(angkaString);
console.log(parseInt(angkaString));
console.log(parseFloat(angkaString));

// contoh
let pembelian = "10000"
let pajak = 1500
let bayar = parseInt (pembelian) + pajak;
console.log(bayar);



// TIPE DATA BOOLEAN //
// false = 0
// true = 1

let data_bool_1 = false;
console.log(data_bool_1);
data_bool_1 = true;
console.log(data_bool_1);

let data_bool_2 = (3<10);
console.log(data_bool_2);

let data_bool_3 = ("ucup" == "rahmat");
console.log(data_bool_3);
data_bool_3 = ("ucup" == "ucup");
console.log(data_bool_3);

let data_bool_4 =(false == 0);
console.log(data_bool_4);
data_bool_4 =(false == 0n);
console.log(data_bool_4);
data_bool_4 =(false == " ");
console.log(data_bool_4);

data_bool_4 =(true == 0);
console.log(data_bool_4);



// 1. cara menentukan saldo terakhir //
let saldoPemasukan = "50000"
let saldoPengeluaran = 25000
let saldoTerakhir = saldoPemasukan / saldoPengeluaran
console.log(typeof saldoTerakhir);



// 2. cara menentukan hari dari tanggal saat ini //
const days = ["Minggu","Senin","Selasa","Rabu","kamis","jum'at","Sabtu"];
const d = new Date();
let day = days[d.getDay()];
console.log(`sekarang adalah hari = ${day}`);


// document.title ="Lintas TKJ"

// const body = document.body;
// let h1 = document.createElement('h1')
// h1.innerHTML = '<marquee>hallo semuanya</marquee>'
// let h2 = document.createElement('p')
// h2.innerHTML = 'hallo semuanya'

// document.body.append(h1)
// document.body.append(h2)



// cara memasukan element ke dalam html //
// const badan = document.body;
// let angka1 = 30;
// let angka2 = 20;
// let semuaAngka = angka1 + angka2
// semuaAngka.innerHTML;

// document.body.append(semuaAngka);





