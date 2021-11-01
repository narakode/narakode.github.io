---
layout: post
title: "Belajar CSS Flexbox : Mengatur Posisi Flexbox"
date: 2021-11-01 06:30:00 +0700
cover: mengatur-posisi-flexbox.png
thumb: mengatur-posisi-flexbox.png
categories: css
---

[Flexbox]({{ page.url }}) - Melanjutkan postingan sebelumnya mengenai flexbox, kali ini kita akan belajar cara __mengatur posisi flexbox__.

Ada 3 properti CSS untuk mengatur posisi flexbox, *align-items*, *align-content*, dan *justify-content*.

Apa saja fungsi masing-masing properti tersebut, mari kita simak pembahasanya berikut.

## Justify Content

Digunakan untuk mengatur posisi flexbox secara __horizontal__.

```css
justify-content: flex-start | flex-end | center | space-between | space-around
```

### Flex-Start

Mengatur posisi flexbox menjadi __rata kiri__.

```css
.container {
  display: flex;
  justify-content: flex-start;
}
```

![Justify Content Flex Start]({{ site.base_url }}/assets/img/css/flexbox/3/justify-content-flex-start.png)

### Flex-End

Mengatur posisi flexbox menjadi __rata kanan__.

```css
.container {
  display: flex;
  justify-content: flex-end;
}
```

![Justify Content Flex End]({{ site.base_url }}/assets/img/css/flexbox/3/justify-content-flex-end.png)

### Center

Mengatur posisi flexbox menjadi __rata tengah__.

```css
.container {
  display: flex;
  justify-content: center;
}
```

![Justify Content Center]({{ site.base_url }}/assets/img/css/flexbox/3/justify-content-center.png)

### Space Between

Memberi __ruang__ di antara flexbox.

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

![Justify Content Space Between]({{ site.base_url }}/assets/img/css/flexbox/3/justify-content-space-between.png)

### Space Around

Memberi __ruang__ sebelum, di antara, dan sesudah flexbox.

```css
.container {
  display: flex;
  justify-content: space-around;
}
```

![Justify Content Space Around]({{ site.base_url }}/assets/img/css/flexbox/3/justify-content-space-around.png)

## Align Content

Digunakan untuk mengatur posisi flexbox secara __vertikal__.

```css
align-content: flex-start | flex-end | center | space-between | space-around
```

### Flex-Start

Mengatur posisi flexbox menjadi __rata atas__.

```css
.container {
  display: flex;
  align-content: flex-start;
}
```

![Align Content Flex Start]({{ site.base_url }}/assets/img/css/flexbox/3/align-content-flex-start.png)

### Flex-End

Mengatur posisi flexbox menjadi __rata bawah__.

```css
.container {
  display: flex;
  align-content: flex-end;
}
```

![Align Content Flex End]({{ site.base_url }}/assets/img/css/flexbox/3/align-content-flex-end.png)

### Center

Mengatur posisi flexbox menjadi __rata tengah__.

```css
.container {
  display: flex;
  align-content: center;
}
```

![Align Content Center]({{ site.base_url }}/assets/img/css/flexbox/3/align-content-center.png)

### Space Between

Memberi __ruang__ di antara flexbox.

```css
.container {
  display: flex;
  align-content: space-between;
}
```

![Align Content Space Between]({{ site.base_url }}/assets/img/css/flexbox/3/align-content-space-between.png)

### Space Around

Memberi __ruang__ sebelum, di antara, dan sesudah flexbox.

```css
.container {
  display: flex;
  align-content: space-around;
}
```

![Align Content Space Around]({{ site.base_url }}/assets/img/css/flexbox/3/align-content-space-around.png)

## Align Items

Digunakan untuk mengatur posisi flexbox secara __vertikal pada barisnya__.

```css
align-items: flex-start | flex-end | center | stretch | baseline
```

### Flex-Start

Mengatur posisi flexbox menjadi __rata atas__.

```css
.container {
  display: flex;
  align-items: flex-start;
}
```

![Align Items Flex Start]({{ site.base_url }}/assets/img/css/flexbox/3/align-items-flex-start.png)

### Flex-End

Mengatur posisi flexbox menjadi __rata bawah__.

```css
.container {
  display: flex;
  align-items: flex-end;
}
```

![Align Items Flex End]({{ site.base_url }}/assets/img/css/flexbox/3/align-items-flex-end.png)

### Center

Mengatur posisi flexbox menjadi __rata tengah__.

```css
.container {
  display: flex;
  align-items: center;
}
```

![Align Items Center]({{ site.base_url }}/assets/img/css/flexbox/3/align-items-center.png)

### Stretch

Mengisi __ruang kosong__ _container_.

```css
.container {
  display: flex;
  align-items: stretch;
}
```

![Align Items Stretch]({{ site.base_url }}/assets/img/css/flexbox/3/align-items-stretch.png)

### Baseline

Mengatur posisi flexbox menjadi rata tengah berdasarkan __garis tengah barisnya__.

```css
.container {
  display: flex;
  align-items: baseline;
}
```

![Align Items Baseline]({{ site.base_url }}/assets/img/css/flexbox/3/align-items-baseline.png)

## Referensi

Untuk penjelasan lebih lanjut, anda dapat mengunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css3_flexbox_container.asp" target="_blank">CSS3 Flexbox Container</a>