"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";

import { NewPasswordShema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AppRoutes } from "@/constants/app-routes";
import { FormError } from "@/components/form-error";
import { newPassword } from "@/actions/new-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSuccess } from "@/components/form-success";
import { CardWrapper } from "@/components/auth/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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
