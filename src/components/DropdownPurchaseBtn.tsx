import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FaDollarSign, FaFile, FaMusic } from 'react-icons/fa';
import { Button } from './ui/button';
export default function DropdownPurchaseBtn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <FaDollarSign /> Purchase
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" sideOffset={12}>
        <DropdownMenuItem asChild>
          <a href="https://mymusicsheet.com/johnroddondoyano" target="_blank">
            <FaMusic /> Piano Sheets
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="https://payhip.com/johnroddondoyano" target="_blank">
            <FaFile /> MIDI/MXL Files
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
