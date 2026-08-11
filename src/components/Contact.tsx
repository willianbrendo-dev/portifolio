"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/Icons";
import { siteConfig, type ContactIntent } from "@/data/portfolio";

const intentLabels: Record<ContactIntent, string> = {
  projeto: "Projeto ou serviço",
  contratacao: "Oportunidade profissional",
  conversa: "Conversa inicial",
};

export function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const intent = (String(data.get("intent") ?? "conversa") as ContactIntent);
    const message = String(data.get("message") ?? "").trim();
    const text = [
      "Olá, Willian. Vim pelo seu portfólio.",
      `Assunto: ${intentLabels[intent]}`,
      `Nome: ${name}`,
      email ? `E-mail: ${email}` : "",
      `Mensagem: ${message}`,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(text)}`;
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");

    setStatus("A conversa foi preparada no WhatsApp.");
    if (!newWindow) window.location.assign(url);
  }

  return (
    <section id="contato" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-grid" aria-hidden="true" />
      <div className="section-shell contact-shell">
        <div className="contact-copy reveal">
          <p className="eyebrow eyebrow-light">Contato</p>
          <h2 id="contact-title">Qual problema precisa virar software?</h2>
          <p>
            Traga o contexto: objetivo, restrição ou oportunidade. A conversa começa
            pelo problema, não por uma lista de funcionalidades.
          </p>

          <div className="direct-contact">
            <a href={`mailto:${siteConfig.email}`}>
              <Icon name="mail" />
              <span><small>E-mail</small>{siteConfig.email}</span>
            </a>
            <a href={`https://wa.me/${siteConfig.phoneDigits}`} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" />
              <span><small>WhatsApp</small>{siteConfig.phoneDisplay}</span>
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              <Icon name="github" />
              <span><small>Código público</small>github.com/willianbrendo-dev</span>
            </a>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-heading">
            <span>BRIEF / 01</span>
            <p>Três campos para começar.</p>
          </div>

          <label>
            <span>Como posso chamar você?</span>
            <input name="name" type="text" autoComplete="name" required placeholder="Seu nome" />
          </label>

          <label>
            <span>Qual é o contexto?</span>
            <select name="intent" defaultValue="projeto">
              <option value="projeto">Tenho um projeto</option>
              <option value="contratacao">Estou contratando</option>
              <option value="conversa">Quero iniciar uma conversa</option>
            </select>
          </label>

          <label>
            <span>E-mail <small>(opcional)</small></span>
            <input name="email" type="email" autoComplete="email" placeholder="nome@empresa.com" />
          </label>

          <label>
            <span>O que você precisa resolver?</span>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Contexto, objetivo e qualquer restrição importante."
            />
          </label>

          <button className="button button-primary" type="submit">
            Abrir conversa no WhatsApp <Icon name="arrow" />
          </button>
          <p className="form-privacy">
            Os dados preenchidos são usados apenas para montar a mensagem no WhatsApp.
          </p>
          <p className="sr-only" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  );
}
