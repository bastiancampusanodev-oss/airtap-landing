"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  ShieldCheck,
  LockKeyhole,
  Database,
  FileText,
  Trash2,
  Accessibility,
} from "lucide-react";

export default function PrivacyPage() {
  const locale = useLocale();
  const isEs = locale === "es";

  return (
    <main className="pt-10 md:pt-14">
      <section className="relative overflow-hidden rounded-[2rem] bg-white/5 p-6 md:p-10 ring-1 ring-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(79,93,255,0.14),transparent_35%)]" />

        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-300/20">
            <ShieldCheck className="h-4 w-4" />
            {isEs ? "Política de privacidad" : "Privacy Policy"}
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
            {isEs ? "Privacidad en AirTap" : "Privacy at AirTap"}
          </h1>

          <p className="mt-5 max-w-3xl text-base md:text-lg leading-8 text-white/70">
            {isEs
              ? "AirTap está diseñado para entregar control manos libres con una política clara: recolectar solo lo necesario, proteger los datos del usuario y ser transparente sobre cómo funciona nuestro Programa de Accesibilidad."
              : "AirTap is designed to provide hands-free control with a clear privacy principle: collect only what is necessary, protect user data, and be transparent about how our Accessibility Program works."}
          </p>

          <p className="mt-4 text-sm text-white/45">
            {isEs ? "Última actualización: junio de 2026" : "Last updated: June 2026"}
          </p>
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard
          icon={<LockKeyhole className="h-5 w-5" />}
          title={isEs ? "Transmisión segura" : "Secure transmission"}
          desc={
            isEs
              ? "Los datos enviados a AirTap se transmiten mediante conexiones seguras."
              : "Data sent to AirTap is transmitted through secure connections."
          }
        />

        <InfoCard
          icon={<Database className="h-5 w-5" />}
          title={isEs ? "Datos limitados" : "Limited data"}
          desc={
            isEs
              ? "Guardamos solo la información necesaria para operar la app, prevenir abuso y administrar accesos."
              : "We store only the information needed to operate the app, prevent abuse, and manage access."
          }
        />

        <InfoCard
          icon={<Trash2 className="h-5 w-5" />}
          title={isEs ? "Control del usuario" : "User control"}
          desc={
            isEs
              ? "Los usuarios pueden solicitar revisión o eliminación de datos escribiendo a soporte."
              : "Users can request review or deletion of their data by contacting support."
          }
        />
      </section>

      <section className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-6">
        <div className="rounded-[2rem] bg-white/5 p-6 md:p-8 ring-1 ring-white/10">
          <SectionTitle
            icon={<FileText className="h-5 w-5 text-cyan-300" />}
            title={isEs ? "Información que podemos recopilar" : "Information we may collect"}
          />

          <div className="mt-6 space-y-5 text-sm leading-7 text-white/70">
            <p>
              {isEs
                ? "AirTap puede recopilar información necesaria para crear una cuenta, operar la app, procesar suscripciones, entregar soporte, medir el funcionamiento del producto y prevenir abuso."
                : "AirTap may collect information necessary to create an account, operate the app, process subscriptions, provide support, measure product performance, and prevent abuse."}
            </p>

            <ul className="space-y-3">
              <li>
                <strong className="text-white">
                  {isEs ? "Información de cuenta:" : "Account information:"}
                </strong>{" "}
                {isEs
                  ? "nombre, correo electrónico, identificadores de usuario y datos relacionados con autenticación."
                  : "name, email address, user identifiers, and authentication-related data."}
              </li>

              <li>
                <strong className="text-white">
                  {isEs ? "Datos de uso:" : "Usage data:"}
                </strong>{" "}
                {isEs
                  ? "eventos de la app, interacciones, estado de suscripción, errores técnicos, información del dispositivo y métricas de rendimiento."
                  : "app events, interactions, subscription status, technical errors, device information, and performance metrics."}
              </li>

              <li>
                <strong className="text-white">
                  {isEs ? "Datos de pago:" : "Payment data:"}
                </strong>{" "}
                {isEs
                  ? "los pagos se procesan mediante Google Play. AirTap puede recibir identificadores de compra, estado de suscripción y datos necesarios para activar o restaurar acceso."
                  : "payments are processed through Google Play. AirTap may receive purchase identifiers, subscription status, and data needed to activate or restore access."}
              </li>

              <li>
                <strong className="text-white">
                  {isEs ? "Datos del Programa de Accesibilidad:" : "Accessibility Program data:"}
                </strong>{" "}
                {isEs
                  ? "nombre completo, país, número de credencial o certificado, imagen de credencial y metadatos de verificación."
                  : "full name, country, credential or certificate number, credential image, and verification metadata."}
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] bg-cyan-400/10 p-6 md:p-8 ring-1 ring-cyan-300/25">
          <SectionTitle
            icon={<Accessibility className="h-5 w-5 text-cyan-300" />}
            title={isEs ? "Programa de Accesibilidad" : "Accessibility Program"}
          />

          <div className="mt-6 space-y-5 text-sm leading-7 text-white/75">
            <p>
              {isEs
                ? "AirTap ofrece un Programa de Accesibilidad para usuarios con discapacidad que dificulta el uso del teléfono con las manos. Los usuarios elegibles pueden solicitar acceso gratuito a AirTap Plus."
                : "AirTap offers an Accessibility Program for users who have a disability that makes it difficult to use a phone with their hands. Eligible users may request free access to AirTap Plus."}
            </p>

            <p>
              {isEs
                ? "Para revisar elegibilidad, AirTap puede solicitar nombre completo, país, número de credencial o certificado, y una imagen de una credencial, tarjeta o certificado de discapacidad."
                : "To review eligibility, AirTap may ask for full name, country, credential or certificate number, and an image of a disability credential, disability card, or disability certificate."}
            </p>

            <p>
              {isEs
                ? "AirTap usa verificación asistida por IA para revisar si la imagen enviada parece corresponder a una credencial o certificado relacionado con discapacidad, y si la información entregada coincide con el documento."
                : "AirTap uses AI-assisted verification to check whether the submitted image appears to be a disability-related credential or certificate, and whether the submitted information matches the document."}
            </p>

            <p>
              {isEs
                ? "La imagen de la credencial se transmite de forma segura para validación y se usa solo para procesar la solicitud del Programa de Accesibilidad. AirTap no almacena la imagen cargada."
                : "The credential image is transmitted securely for validation and is used only to process the Accessibility Program request. AirTap does not store the uploaded credential image."}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-[2rem] bg-white/5 p-6 md:p-8 ring-1 ring-white/10">
        <SectionTitle
          icon={<Database className="h-5 w-5 text-cyan-300" />}
          title={isEs ? "Cómo usamos y conservamos los datos" : "How we use and retain data"}
        />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 text-sm leading-7 text-white/70">
          <div className="rounded-3xl bg-black/20 p-5 ring-1 ring-white/10">
            <h3 className="font-semibold text-white">
              {isEs ? "Uso de datos" : "Data use"}
            </h3>
            <p className="mt-2">
              {isEs
                ? "Usamos los datos para operar AirTap, entregar funciones de control manos libres, administrar cuentas y suscripciones, prevenir fraude o abuso, procesar solicitudes de accesibilidad, mejorar estabilidad y entregar soporte."
                : "We use data to operate AirTap, provide hands-free control features, manage accounts and subscriptions, prevent fraud or abuse, process accessibility requests, improve stability, and provide support."}
            </p>
          </div>

          <div className="rounded-3xl bg-black/20 p-5 ring-1 ring-white/10">
            <h3 className="font-semibold text-white">
              {isEs ? "Metadatos de verificación" : "Verification metadata"}
            </h3>
            <p className="mt-2">
              {isEs
                ? "Para prevenir abuso y administrar acceso gratuito, AirTap puede almacenar identificadores cifrados o hasheados, país, estado de solicitud, puntaje de validación, señales de validación, razón de decisión, fechas y estado de acceso."
                : "To prevent abuse and manage free access, AirTap may store encrypted or hashed identifiers, country, application status, validation score, validation flags, decision reason, timestamps, and entitlement status."}
            </p>
          </div>

          <div className="rounded-3xl bg-black/20 p-5 ring-1 ring-white/10">
            <h3 className="font-semibold text-white">
              {isEs ? "Proveedores de servicio" : "Service providers"}
            </h3>
            <p className="mt-2">
              {isEs
                ? "AirTap puede usar proveedores externos para autenticación, infraestructura, analítica, pagos, soporte y verificación asistida por IA. Estos proveedores procesan datos para entregar los servicios de AirTap."
                : "AirTap may use third-party providers for authentication, infrastructure, analytics, payments, support, and AI-assisted verification. These providers process data to deliver AirTap services."}
            </p>
          </div>

          <div className="rounded-3xl bg-black/20 p-5 ring-1 ring-white/10">
            <h3 className="font-semibold text-white">
              {isEs ? "Eliminación y contacto" : "Deletion and contact"}
            </h3>
            <p className="mt-2">
              {isEs
                ? "Puedes solicitar revisión o eliminación de tus datos del Programa de Accesibilidad contactando a AirTap. Algunas retenciones limitadas pueden ser necesarias por seguridad, prevención de abuso, cumplimiento o registros operativos."
                : "You may request review or deletion of your Accessibility Program data by contacting AirTap. Limited retention may be necessary for security, abuse prevention, compliance, or operational records."}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] bg-white/5 p-6 md:p-8 ring-1 ring-white/10">
        <h2 className="text-2xl font-semibold tracking-tight">
          {isEs ? "Contacto" : "Contact"}
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">
          {isEs
            ? "Para consultas de privacidad, soporte o solicitudes relacionadas con tus datos, contáctanos desde la página de contacto de AirTap."
            : "For privacy questions, support, or data-related requests, contact us through the AirTap contact page."}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black hover:brightness-110"
          >
            {isEs ? "Contactar a AirTap" : "Contact AirTap"}
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href={`/${locale}/accessibility-program`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
          >
            {isEs ? "Ver Programa de Accesibilidad" : "View Accessibility Program"}
          </Link>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
      <div className="h-11 w-11 rounded-2xl bg-cyan-400/10 ring-1 ring-cyan-300/20 flex items-center justify-center text-cyan-300">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/65">{desc}</p>
    </div>
  );
}

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25 flex items-center justify-center">
        {icon}
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}