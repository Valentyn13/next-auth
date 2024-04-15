"use client";

import { admin } from "@/actions/admin";
import { UserRole } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { ApiRoutes } from "@/constants/api-routes";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { useCurrentRole } from "@/hooks/use-current-role";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const AdminPage = () => {
  const role = useCurrentRole();

  const handleApiRouteClick = () => {
    fetch(ApiRoutes.ADMIN).then((res) => {
      if (res.ok) {
        console.log("API route success");
      } else {
        console.error("API route failed");
      }
    });
  };

  const handleServerActionClick = () => {
    admin().then((res) => {
      if (res.success) {
        console.log("Server action success");
      } else {
        console.error("Server action failed");
      }
    });
  };
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{role}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRoles={UserRole.ADMIN}>
          <FormSuccess message="Allowed content for Admin" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin only API route</p>
          <Button onClick={handleApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin only Server Action</p>
          <Button onClick={handleServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
