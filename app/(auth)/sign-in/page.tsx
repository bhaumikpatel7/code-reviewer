import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSet,
} from "@/components/ui/field";

export const metadata: Metadata = {
    title:"Sign In",
    description:"Sign in to PR-Reviewer to review your PR"
}

type SignInPageProps = {
    searchParams: Promise<{callbackUrl?:string}>;
}

const SignInPage = async ({searchParams}:SignInPageProps) => {
  return <div>page</div>;
};

export default SignInPage;
