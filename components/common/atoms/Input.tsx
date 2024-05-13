import { ChangeEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { InputModule } from './inputStyle';
import Button from './Button';
import { SearchResults } from '@/pages/folder/folderStyle';

interface IButtonModule {
  $type?: string;
  $inputClass?: string;
  $btnShow?: boolean;
  $placeholder?: string;
  $beforeBgIcon?: string;
  $btnClass?: string;
  children?: ReactNode;
  $clickEvent?: string;
  onchange?: (value: string) => void;
}

function Input({
  $btnShow = false,
  $type = 'text',
  $inputClass,
  $placeholder,
  $beforeBgIcon = '',
  $btnClass = '',
  children,
  $clickEvent,
  onchange,
}: IButtonModule) {
  const [value, setValue] = useState('');
  const refInput = useRef(null);
  const handleChangInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);

    if (onchange) {
      // value값 전달
      onchange(value);
    }
  };

  const handleButtonEvent = (text: string) => {
    if (!$clickEvent) return;
    if ($clickEvent === 'reset') {
      setValue('');
    }
  };

  return (
   <>
     <div style={{position:'relative'}}>
        <InputModule
          type={$type}
          className={$inputClass}
          placeholder={$placeholder}
          value={value}
          onChange={handleChangInput}
          $beforeBgIcon={$beforeBgIcon}
          ref={refInput}
        />
        {$btnShow && (
          <Button $btnClass={$btnClass} onclick={() => handleButtonEvent(value)}>
            {children}
          </Button>
        )}
      </div>
    {value && <SearchResults><span>{value}</span>으로 검색한 결과입니다.</SearchResults>}
   </>
  );
}
export default Input;
