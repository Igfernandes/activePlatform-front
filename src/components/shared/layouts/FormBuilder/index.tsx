import { FormBuilderContent } from "./parts/Content";
import FormBuilderProvider from "./context";
import { FormBuilderSidebar } from "./parts/Sidebar";
import { Modal } from "./parts/Modal";
import { FieldShape } from "./type";

export type FormBuilderProps = {
  components: FieldShape[];
  onChangeForm: (fieldsForm: Array<FieldShape>) => void;
};

export function FormBuilder({ components, onChangeForm }: FormBuilderProps) {
  return (
    <div className="form-builder relative z-50">
      <FormBuilderProvider onChangeForm={onChangeForm} form={components}>
        <div className="builder-content flex flex-wrap md:flex-nowrap relative z-0">
          <FormBuilderSidebar />
          <FormBuilderContent />
        </div>
        <Modal />
      </FormBuilderProvider>
    </div>
  );
}
