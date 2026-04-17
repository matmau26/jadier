"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";

const schema = z.object({
  nom: z.string().min(2, "Le nom est requis"),
  prenom: z.string().min(2, "Le prénom est requis"),
  email: z.string().email("Email invalide"),
  telephone: z
    .string()
    .min(6, "Téléphone invalide")
    .regex(/^[0-9+\s().-]+$/, "Format invalide"),
  type: z.enum(["Reprise", "Création", "Accompagnement & gestion"], {
    errorMap: () => ({ message: "Veuillez choisir un type" }),
  }),
  activite: z.string().min(2, "L'activité est requise"),
  besoins: z.string().min(10, "Merci de détailler vos besoins"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      activite: "",
      besoins: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 700));
    console.log("Contact form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field
          label="Nom"
          error={errors.nom?.message}
          input={
            <input
              type="text"
              autoComplete="family-name"
              {...register("nom")}
              className="input-base"
              placeholder="Dupont"
            />
          }
        />
        <Field
          label="Prénom"
          error={errors.prenom?.message}
          input={
            <input
              type="text"
              autoComplete="given-name"
              {...register("prenom")}
              className="input-base"
              placeholder="Marie"
            />
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field
          label="Email"
          error={errors.email?.message}
          input={
            <input
              type="email"
              autoComplete="email"
              {...register("email")}
              className="input-base"
              placeholder="vous@entreprise.fr"
            />
          }
        />
        <Field
          label="Téléphone"
          error={errors.telephone?.message}
          input={
            <input
              type="tel"
              autoComplete="tel"
              {...register("telephone")}
              className="input-base"
              placeholder="+33 4 75 01 22 98"
            />
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field
          label="Type"
          error={errors.type?.message}
          input={
            <select
              {...register("type")}
              className="input-base appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%231a1a1a%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22></polyline></svg>')] bg-no-repeat bg-[right_1.25rem_center]"
              defaultValue=""
            >
              <option value="" disabled>
                Sélectionner…
              </option>
              <option value="Reprise">Reprise</option>
              <option value="Création">Création</option>
              <option value="Accompagnement & gestion">
                Accompagnement &amp; gestion
              </option>
            </select>
          }
        />
        <Field
          label="Activité"
          error={errors.activite?.message}
          input={
            <input
              type="text"
              {...register("activite")}
              className="input-base"
              placeholder="Immobilier, artisanat, services…"
            />
          }
        />
      </div>

      <Field
        label="Vos besoins"
        error={errors.besoins?.message}
        input={
          <textarea
            {...register("besoins")}
            rows={5}
            className="input-base resize-none"
            placeholder="Parlez-nous de votre projet, vos enjeux, vos échéances…"
          />
        }
      />

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting || submitted}
          className="group inline-flex items-center gap-2 rounded-full bg-moss px-8 py-4 text-base font-medium text-ivory transition-all hover:bg-olive hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {submitted ? (
            <>
              Message envoyé <Check size={18} />
            </>
          ) : isSubmitting ? (
            <>
              Envoi en cours <Loader2 size={18} className="animate-spin" />
            </>
          ) : (
            <>
              Envoyer ma demande
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </>
          )}
        </button>
      </div>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-moss font-medium"
        >
          Merci pour votre message. Nous revenons vers vous très rapidement.
        </motion.p>
      )}

      <style jsx>{`
        :global(.input-base) {
          width: 100%;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(26, 26, 26, 0.12);
          border-radius: 9999px;
          padding: 1rem 1.5rem;
          font-size: 1rem;
          font-weight: 300;
          color: #1a1a1a;
          transition: all 0.2s ease;
        }
        :global(textarea.input-base) {
          border-radius: 1.5rem;
        }
        :global(.input-base:focus) {
          outline: none;
          border-color: #7a8468;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(122, 132, 104, 0.12);
        }
        :global(.input-base::placeholder) {
          color: rgba(26, 26, 26, 0.35);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.16em] text-ink/60 font-medium mb-2">
        {label}
      </span>
      {input}
      {error && (
        <span className="mt-2 block text-xs text-red-600 font-medium">
          {error}
        </span>
      )}
    </label>
  );
}
