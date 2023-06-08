/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
Напишите функцию, которая при задании URL-адреса в виде строки анализирует только доменное имя и возвращает его в виде строки. Например:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"*/

const domainName = (url) => url.replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\..*!/, '');