import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { AppRoutes } from "@/constants/app-routes";
import { CardWrapper } from "@/components/auth/card-wrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonHref={AppRoutes.LOGIN}
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center">
        <ExclamationTriangleIcon className="text-destructive size-5" />
      </div>
    </CardWrapper>
  );
};

export { ErrorCard };
