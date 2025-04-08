import AuthForm from '@/components/AuthForm';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Suspense } from 'react';

function SignUpPage() {
  return (
    <div className="mt-20 flex flex-1 flex-col items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4">
          <CardTitle className="text-center text-3xl">Sign Up</CardTitle>
        </CardHeader>
        <Suspense>
          <AuthForm type="signUp" />
        </Suspense>
      </Card>
    </div>
  );
}

export default SignUpPage;
