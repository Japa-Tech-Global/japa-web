'use client';

import React, { useCallback } from 'react';

const PasswordRules = ({
  password,
  className,
}: {
  password: string;
  className?: string;
}) => {
  interface CheckType {
    label: string;
    condition: RegExp;
  }

  const checks: CheckType[] = [
    {
      label: '8 character minimum (e.g 123456A@)',
      condition: /^.{8,}$/,
    },
    {
      label: 'At least one uppercase letter (e.g ABC)',
      condition: /[A-Z]/g,
    },
    {
      label: 'At least one special character (e.g @,#)',
      condition: /[^a-zA-Z0-9s]/g,
    },
  ];

  const runCheck = useCallback(
    (condition: RegExp) => condition.test(password),
    [password]
  );

  return (
    <div className={'flex flex-col gap-2 ' + className}>
      {checks.map((check) => (
        <div key={check.label} className='flex items-center gap-2'>
          <div
            className='w-[9px] h-[9px] rounded-full'
            style={{
              backgroundColor: runCheck(check.condition) ? '#8000D7' : '#D3D4D8',
            }}
          />
          <span className='text-[10px]'>{check.label}</span>
        </div>
      ))}
    </div>
  );
};

export default PasswordRules;
