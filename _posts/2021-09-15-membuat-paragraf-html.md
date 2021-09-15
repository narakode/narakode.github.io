---
layout: post
title: "Cara Membuat Paragraf Pada HTML"
date: 2021-09-15 08:00:00 +0700
cover: membuat-paragraf-html.png
thumb: membuat-paragraf-html-thumb.png
categories: html
---

[Paragraf]({{ page.url }}) - Paragraf merupakan salah satu tag HTML yang sering digunakan pada halaman website. Fungsinya menampilkan paragraf ke halaman website.

Paragraf biasanya digunakan untuk menampilkan konten-konten informatif seperti teks, link, dll.

## Membuat Paragraf

Untuk membuat paragraf pada HTML, kita dapat menggunakan tag `p` yang artinya *paragraph*.

```html
<p>
	Saya adalah paragraf
</p>
```

Hasilnya

![Paragraf]({{ site.baseurl }}/assets/img/paragraf.png)

***

Kita juga dapat menampilkan beberapa paragraf sekaligus, setiap paragraf akan berganti baris

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

Tag `br` atauh *break* berfungsi untuk memberikan baris baru pada teks, elemen setelah tag `br` akan berganti baris dibawah elemen sebelumnya.

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

Paragraf berisikan kalimat yang digabungkan, terdiri dari berbagai huruf dan kata, terkadang dalam kata/huruf tersebut kita ingin memberikan tanda tebal atau miring.

Untuk melakukanya, HTML memiliki tag `strong` dan `b` (*bold*) untuk membuat teks menjadi tebal, serta `em` (*emphasize*)  dan `i` (*italic*) untuk memiringkan teks.

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

### Perbedaan Strong dan Bold, Emphasize dan Italic

Lalu apa perbedaan antara `strong` dengan `b` dan `em` dengan `i`?

Perbedaannya terletak pada __penekananya__.

`strong` dan `em` memiliki maksud untuk memberikan penekan atau perhatian lebih pada teks tersebut.

Sedangkan `b` dan `i` hanya memberikan perbedaan format pada teks tidak memiliki maksud lain.

Hal Ini berpengaruh pada seo, karena dapat memberikan nilai lebih pada halaman website kita.