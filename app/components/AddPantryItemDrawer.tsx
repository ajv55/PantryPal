"use client";

import { useRef, useState, type FormEvent } from "react";
import { IoMdClose } from "react-icons/io";
import {
  createPantryItemSchema,
  type CreatePantryItemInput,
} from "../lib/validation/pantry";

type FieldErrors = Partial<Record<keyof CreatePantryItemInput, string>>;

const fieldClass =
  "min-h-11 w-full min-w-0 rounded-lg border border-border bg-surface px-3 py-2 text-base focus-visible:outline-2 focus-visible:outline-brand";

export default function AddPantryItemDrawer() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [successMessage, setSuccessMessage] = useState("");

  function clearFeedback() {
    setFieldErrors({});
    setSuccessMessage("");
  }

  const closeDrawer = () => dialogRef.current?.close();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearFeedback();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const rawQuantity = formData.get("quantity");
    const rawThreshold = formData.get("lowStockThreshold");
    const rawDate = formData.get("expirationDate");

    const quantityMissing =
      typeof rawQuantity !== "string" || rawQuantity.trim() === "";

    // Preserve blank optional values and accept an explicitly entered zero.
    const lowStockThreshold =
      typeof rawThreshold === "string" && rawThreshold.trim() !== ""
        ? Number(rawThreshold)
        : undefined;

    const result = createPantryItemSchema.safeParse({
      name: formData.get("name"),
      category: formData.get("category"),
      quantity: quantityMissing ? undefined : Number(rawQuantity),
      unit: formData.get("unit"),
      expirationDate: rawDate === "" ? undefined : rawDate,
      lowStockThreshold,
    });

    if (!result.success) {
      const errors: FieldErrors = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0];

        if (
          typeof field === "string" &&
          Object.hasOwn(createPantryItemSchema.shape, field)
        ) {
          const key = field as keyof CreatePantryItemInput;
          errors[key] ??= issue.message;
        }
      }

      if (quantityMissing) {
        errors.quantity = "Quantity is required";
      }

      setFieldErrors(errors);

      // Move keyboard focus to the first field with a validation error.
      const firstField = Object.keys(errors)[0];
      const control = firstField ? form.elements.namedItem(firstField) : null;
      if (control instanceof HTMLElement) {
        control.focus();
      }
      return;
    }

    setSuccessMessage("Item validated");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="rounded-lg bg-brand px-4 py-2 font-medium text-white
                   focus-visible:outline-2 focus-visible:outline-offset-2
                   focus-visible:outline-brand hover:bg-brand-strong hover:cursor-pointer"
      >
        Add pantry item
      </button>

      <dialog
        ref={dialogRef}
        onClose={clearFeedback}
        aria-labelledby="add-pantry-item-title"
        aria-describedby="add-pantry-item-description"
        className="pantry-drawer fixed inset-y-0 right-0 left-auto m-0
                   h-dvh max-h-none w-full max-w-none overflow-y-auto
                   bg-surface p-5 text-ink backdrop:bg-black/40
                   sm:w-[28rem] sm:border-l sm:border-border sm:p-6"
      >
        <header className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h2 id="add-pantry-item-title" className="text-xl font-bold">Add pantry item</h2>
            <p id="add-pantry-item-description" className="text-sm text-muted">Track what you have at home.</p>
          </div>

          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close add pantry item drawer"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg text-brand hover:bg-brand-soft
                       focus-visible:outline-2 focus-visible:outline-brand"
          >
            <IoMdClose aria-hidden="true" size={20} />
          </button>
        </header>

        <form noValidate className="space-y-4" onSubmit={handleSubmit}
          onInput={() => setSuccessMessage("")}>
          <div className="min-w-0 space-y-1.5">
            <label htmlFor="pantry-name" className="block text-sm font-medium">
              Name
            </label>
            <input id="pantry-name" name="name" aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "pantry-name-error" : undefined} type="text" placeholder="e.g. Milk" className={fieldClass} />
              {fieldErrors.name && (
                <p id="pantry-name-error" className="text-sm text-red-700">
                  {fieldErrors.name}
                </p>
              )}
          </div>

          <div className="min-w-0 space-y-1.5">
            <label htmlFor="pantry-category" className="block text-sm font-medium">
              Category
            </label>
            <select id="pantry-category" name="category" aria-invalid={Boolean(fieldErrors.category)} aria-describedby={fieldErrors.category ? "pantry-category-error" : undefined} defaultValue="" className={fieldClass}>
              <option value="" disabled>Select a category</option>
              <option value="Produce">Produce</option>
              <option value="Dairy & Eggs">Dairy &amp; Eggs</option>
              <option value="Meat & Seafood">Meat &amp; Seafood</option>
              <option value="Pantry Staples">Pantry Staples</option>
              <option value="Frozen">Frozen</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
              {fieldErrors.category && (
                <p id="pantry-category-error" className="text-sm text-red-700">
                  {fieldErrors.category}
                </p>
              )}
          </div>

          <div className="grid grid-cols-1 gap-4 min-[360px]:grid-cols-2">
            <div className="min-w-0 space-y-1.5">
              <label htmlFor="pantry-quantity" className="block text-sm font-medium">
                Quantity
              </label>
              <input id="pantry-quantity" name="quantity" aria-invalid={Boolean(fieldErrors.quantity)} aria-describedby={fieldErrors.quantity ? "pantry-quantity-error" : undefined} type="number" step="any" placeholder="e.g. 0.5" className={fieldClass} />
              {fieldErrors.quantity && (
                <p id="pantry-quantity-error" className="text-sm text-red-700">
                  {fieldErrors.quantity}
                </p>
              )}
            </div>
            <div className="min-w-0 space-y-1.5">
              <label htmlFor="pantry-unit" className="block text-sm font-medium">
                Unit
              </label>
              <select id="pantry-unit" name="unit" aria-invalid={Boolean(fieldErrors.unit)} aria-describedby={fieldErrors.unit ? "pantry-unit-error" : undefined} defaultValue="" className={fieldClass}>
                <option value="" disabled>Select a unit</option>
                <option value="item">item</option>
                <option value="pack">pack</option>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="oz">oz</option>
                <option value="lb">lb</option>
                <option value="ml">ml</option>
                <option value="l">l</option>
              </select>
              {fieldErrors.unit && (
                <p id="pantry-unit-error" className="text-sm text-red-700">
                  {fieldErrors.unit}
                </p>
              )}
            </div>
          </div>

          <div className="min-w-0 space-y-1.5">
            <label htmlFor="pantry-expirationDate" className="block text-sm font-medium">
              Expiration date (optional)
            </label>
            <input id="pantry-expirationDate" name="expirationDate" aria-invalid={Boolean(fieldErrors.expirationDate)} aria-describedby={fieldErrors.expirationDate ? "pantry-expirationDate-error" : undefined} type="date" className={fieldClass} />
              {fieldErrors.expirationDate && (
                <p id="pantry-expirationDate-error" className="text-sm text-red-700">
                  {fieldErrors.expirationDate}
                </p>
              )}
          </div>

          <div className="min-w-0 space-y-1.5">
            <label htmlFor="pantry-lowStockThreshold" className="block text-sm font-medium">
              Low-stock threshold (optional)
            </label>
            <input aria-invalid={Boolean(fieldErrors.lowStockThreshold)} aria-describedby={ fieldErrors.lowStockThreshold ? "pantry-threshold-help pantry-threshold-error" : "pantry-threshold-help" } id="pantry-lowStockThreshold" name="lowStockThreshold" type="number" step="any" placeholder="e.g. 0.5" className={fieldClass} />
            <p id="pantry-threshold-help" className="text-sm text-muted">
              We&apos;ll flag this item when its quantity reaches this amount or lower.
            </p>
            {fieldErrors.lowStockThreshold && (
                <p
                    id="pantry-threshold-error"
                    className="text-sm text-red-700"
                >
                    {fieldErrors.lowStockThreshold}
                </p>
                )}
          </div>

          <p role="status" className="text-sm text-brand">
            {successMessage}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={closeDrawer}
              className="min-h-11 rounded-lg border border-border px-3 py-2 font-medium text-brand-strong hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-brand"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="min-h-11 rounded-lg bg-brand px-3 py-2 font-medium text-white disabled:opacity-70"
            >
              Add item
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}