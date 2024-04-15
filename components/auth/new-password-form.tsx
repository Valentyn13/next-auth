"use client";

import * as z from "zod";
import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewPasswordShema } from "@/schemas";
import { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/new-password";
import { AppRoutes } from "@/constants/app-routes";

const NewPasswordForm = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof NewPasswordShema>>({
    resolver: zodResolver(NewPasswordShema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof NewPasswordShema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newPassword(data, token).then((response) => {
        setError(response?.error);
        setSuccess(response?.success);
      });
    });
  };
  return (
    <CardWrapper
      headerLabel="Enter new passwod?"
      backButtonLabel="Back to login"
      backButtonHref={AppRoutes.LOGIN}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="******" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Set new password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export { NewPasswordForm };
