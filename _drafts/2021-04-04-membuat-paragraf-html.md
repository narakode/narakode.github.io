---
layout: post
title: "Cara Membuat Paragraf di HTML"
date: 2021-04-04 19:46:00 +0700
cover: membuat-paragraf-html.png
thumb: membuat-paragraf-html-thumb.png
categories: html
---

Paragraf merupakan salah satu tag HTML yang sering digunakan di halaman website. Fungsinya menampilkan paragraf ke halaman website.

## Membuat Paragraf

Untuk membuat paragraf di HTML, kita dapat menggunakan tag `p`.

```html
<p>
	Saya adalah paragraf
</p>
```

Hasilnya

![Paragraf]({{ site.baseurl }}/assets/img/paragraf.png)

***

Kita juga dapat menampilkan banyak paragraf, setiap paragraf akan berganti baris

```html
<p>
	Saya adalah paragraf pertama
</p>
<p>
	Saya adalah paragraf kedua
</p>
<p>
	Saya adalah paragraf ketiga
</p>
```

Hasilnya

![Paragraf Banyak]({{ site.baseurl }}/assets/img/paragraf-banyak.png)

***

## Mengganti Baris

Tag br berfungsi untuk memberikan baris baru pada teks, jadi tidak perlu membuat tag `p` lagi.

```html
<p>
	Saya adalah paragraf pertama <br>
	Saya adalah paragraf kedua <br>
	Saya adalah paragraf ketiga <br>
</p>
```

Hasilnya

![Tag Br]({{ site.baseurl }}/assets/img/paragraf-banyak.png)

***

## Menebalkan dan Memiringkan Teks

Paragraf berisikan berbagai huruf dan kata, terkadang dalam kata/huruf tersebut kita ingin memberikan tanda berupa tebal atau miring.

Untuk melakukanya, HTML memiliki tag `strong` dan `b` untuk membuat teks menjadi tebal, serta `em`  dan `i` untuk memiringkan teks.

```html
<p>
	Saya adalah teks biasa <br>
	<b>Ini adalah teks tebal</b> <br>
	<strong>Sama saja ini juga teks tebal</strong> <br>
	<i>Ini adalah teks miring</i> <br>
	<em>Sama saja ini juga teks miring</em> <br>
</p>
```

Hasilnya

![Menebalkan Dan Memiringkan Paragraf]({{ site.baseurl }}/assets/img/tebal-miring-paragraf.png)

***

Lalu apa perbedaan antara `strong` dengan `b` dan `em` dengan `i`?

Perbedaannya terletak pada penekananya, `strong` dan `em` memiliki maksud untuk memeberikan penekan atau perhatian lebih pada teks tersebut.

Sedangkan `b` dan `i` hanya memberikan perbedaan format pada teks tidak memiliki maksud lain.

Hal Ini berpengaruh pada seo, karena dapat memberikan nilai lebih pada halaman website kita.