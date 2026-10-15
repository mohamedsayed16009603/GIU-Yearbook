/* =====================================================================
   FILE: src/app/models/staff.model.ts
   WHAT: An INTERFACE describing the shape of one staff member.
   WHY:  TypeScript can then warn you if you misspell a field.
         It is also a contract: the Laravel API will later have to return
         JSON with exactly these fields.
   ===================================================================== */

export type Department = 'Engineering' | 'Informatics' | 'Design' | 'Business' | 'Student services';

export interface StaffMember {
  id: number;
  name: string;
  department: Department;
  role: string;
  bio: string;
  quote: string;
  /** Path to the portrait, relative to the /public folder. */
  photo: string;
  /** Featured staff are shown first when "Featured first" is selected. */
  featured: boolean;
}