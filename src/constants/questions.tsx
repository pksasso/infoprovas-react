import React from 'react';
import { Question } from '../models/Question';

export const questions: Question[] = [
  {
    question: <strong>{
      `Por que é necessário logar com o Google para enviar uma prova?`
    }</strong>,
    answer: <span>{
      `Para sabermos quem enviou cada prova, evitando postagem anônima 
      (embora os dados não sejam divulgados).
      Não queremos fakes trollando nosso sistema ;)`
    }</span>
  },
  {
    question: <strong>{
      `Por que só é possível enviar provas em PDF?`
    }</strong>,
    answer: <span>{`Pois esta é a melhor forma de visualização de arquivos 
      multi-páginas, o que é necessário para o envio da maioria das provas.`
    }</span>
  },
  {
    question: <strong>{
      `Como converto uma imagem jpg ou png para PDF?`
    }</strong>,
    answer: <span>{`A maioria dos scanners hoje em dia já possuem a opção de salvar em PDF. 
      Porém, caso precise converter, existe um serviço online gratuito para isto: `}
      <strong><a href="https://tools.pdf24.org/pt/conversor-de-pdf">PDF Converter</a></strong>
      {`(não é necessário preencher o e-mail para converter)`}
    </span>,
  },
  {
    question: <strong>{
      `Tenho todas as páginas de uma prova em PDF, porém em arquivos separados. Como posso juntá-las?`
    }</strong>,
    answer: <span>{`Também existe um serviço online para isto: `}
      <strong><a href="https://foxyutils.com/mergepdf/">Merge PDF</a></strong>{`.
      Lembre-se, o Google é sempre seu amigo =P`}</span>
  },
];
