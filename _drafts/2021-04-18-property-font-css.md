---
layout: post
title: "5 Property Untuk Mengatur Font di CSS"
date: 2021-04-18 13:23:00 +0700
cover: property-font-css.png
thumb: property-font-css.png
categories: css
---

Dalam mengatur font pada CSS, terdapat property-property yang dapat kita gunakan.

Property tersebut akan mengatur font mulai dari, jenis font, ketebalan, gaya, dll.

Disini saya akan membagikan 5 property font untuk mengatur font di CSS, langsung saja berikut daftarnya.

## Font Family

Font Family adalah property css yang digunakan untuk mengatur jenis font.

Nilai dari property ini adalah nama font yang akan digunakan.

Terdapat 5 font standary yang bisa kalian gunakan yaitu `serif`, `sans-serif`, `monospace`, `cursive`, dan `fantasy`.

Kalian juga dapat menggunakan font lainya yang sudah kalian hubungkan.

```css
h1 {
	font-family: fantasy;
}
```

***

![Font Family]({{ site.baseurl }}/assets/img/font-family.png)

***

## Font Size

Font Size adalah property css yang digunakan untuk mengatur ukuran font.

Nilai dari property ini bisa diisi dengan satuan ukuran pada css, seperti `px`, `rem`, `em`, dll. atau bisa juga dengan nilai bawaan dari css-nya. Berikut daftarnya.

* large, larger, x-large, xx-large
* medium
* small, smaller, x-small, xx-small
* px, em, rem, dll
* dll

```css
h1 {
	font-size: 24px;
}
```

## Font Weight

Property ini digunakan untuk mengatur ketebalan sebuah font.

Nilainya bisa dilihat di daftar berikut.

* bold, bolder
* lighter
* normal
* 100, 200,..., 900

```css
h1 {
	font-weight: 700;
}
```

***

![Font Weight]({{ site.baseurl }}/assets/img/font-weight.png)

***

## Font Style

Property Font Style digunakan untuk mengatur gaya sebuah font, apakah miring atau normal.

Property ini memiliki tiga nilai, yaitu `italic` untuk membuat teks menjadi miring, `oblique` untuk membuat teks menjadi lebih miring, dan `normal` untuk membuat teks dengan gaya normal.

```css
h1 {
	font-style: italic;
}
```

***

![Font Style]({{ site.baseurl }}/assets/img/font-style.png)

***

## Font Variant

Property font variant digunakan untuk mengatur kecil atau besar sebuah font.

Property ini memiliki banyak nilai, tapi pada umumnya yang sering digunakan hanya dua nilai, yaitu `small-caps` untuk membuat teks menjadi kapital, dan `normal` untuk membuat teks menjadi biasa.

```css
h1 {
	font-variant: small-caps;
}
```

## Shorthand

Kita juga dapat menyingkat semua property diatas menjadi sebuah property.

Property tersebut ialah `font`.

Property ini digunakan untuk menyingkat semua property diatas menjadi satu.

Nilai dari property ini berisi property-property diatas, `font-style`, `font-variant`, `font-weight`, `font-size`, dan `font-family`. Masing-masing nilai dipisahkan dengan spasi.

Nilai tersebut tidak harus diisi semua, minimal nilai `font-family` dan `font-size`.

```css
h1 {
	font: italic small-caps bold 40px sans-serif;
}
```

***

![Font Shorthand]({{ site.baseurl }}/assets/img/font-shorthand.png)

***