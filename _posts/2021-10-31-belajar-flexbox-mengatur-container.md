---
layout: post
title: "Belajar CSS Flexbox : Mengatur Flexbox"
date: 2021-10-31 07:00:00 +0700
cover: mengatur-flexbox.png
thumb: mengatur-flexbox.png
categories: css
---

[Flexbox]({{ page.url }}) - Flexbox adalah fitur CSS untuk __mengatur__ dan __menata__ elemen-elemen HTML.

Contohnya seperti mengatur posisi elemen, mengatur arah elemen. dll.

Pada postingan kali ini saya akan membahas mengenai cara mengatur flexbox, yaitu mengatur arah dan sifat flexbox ketika berganti baris.

Langsung saja, mari kita simak pembahasanya berikut berikut.

## Flex Direction

Flex direction digunakan untuk __mengatur arah__ flexbox.

```css
flex-direction: row, row-reverse, column, column-reverse
```

### Row

Mengatur arah **horizontal**.

```css
.container {
  display: flex;
  flex-direction: row;
}
```

![Flex Direction Row]({{ site.base_url }}/assets/img/css/flexbox/2/flex-direction-row.png)


### Row-Reverse

Mengatur arah **horizontal terbalik**.

```css
.container {
  display: flex;
  flex-direction: row-reverse;
}
```

![Flex Direction Row Reverse]({{ site.base_url }}/assets/img/css/flexbox/2/flex-direction-row-reverse.png)


### Column

Mengatur arah **vertikal**.

```css
.container {
  display: flex;
  flex-direction: column;
}
```

![Flex Direction Column]({{ site.base_url }}/assets/img/css/flexbox/2/flex-direction-column.png)


### Column-Reverse

Mengatur arah **vertikal terbalik**.

```css
.container {
  display: flex;
  flex-direction: column-reverse;
}
```

![Flex Direction Column Reverse]({{ site.base_url }}/assets/img/css/flexbox/2/flex-direction-column-reverse.png)

## Flex Wrap

Flex wrap digunakan untuk mengatur item flexbox ketika __lebarnya melebihi__ lebar *container*.

```css
flex-wrap: nowrap, wrap, wrap-reverse
```

### Nowrap

Elemen **tidak berganti baris** ketika sudah lebarnya melebihi lebar *container*.

```css
.container {
  display: flex;
  flex-wrap: nowrap;
}
```

![Flex Wrap Nowrap]({{ site.base_url }}/assets/img/css/flexbox/2/flex-wrap-nowrap.png)

### Wrap

Elemen **berganti baris** ketika sudah lebarnya melebihi lebar *container*.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

![Flex Wrap Wrap]({{ site.base_url }}/assets/img/css/flexbox/2/flex-wrap.png)

### Wrap-Reverse

Elemen **berganti baris** dan **urutanya dibalik** ketika sudah lebarnya melebihi lebar *container*.

```css
.container {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

![Flex Wrap Wrap Reverse]({{ site.base_url }}/assets/img/css/flexbox/2/flex-wrap-reverse.png)

## Selanjutnya

Masih ada properti lain untuk mengatur __flexbox__, akan saya jelaskan pada postingan selanjutnya.

Anda juga bisa membacanya pada tautan berikut.

<a href="https://www.w3schools.com/css/css3_flexbox_container.asp" target="_blank">CSS Flexbox Container</a>