"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

const AssignModuleForm = ({
  orgList,
  moduleList,
  loading,
  settingList,
  form,
  handleSubmit,
}) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full flex flex-col items-stretch gap-3"
      >
        <FormField
          control={form.control}
          name="orgId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organisation</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select organisation" />
                  </SelectTrigger>
                  <SelectContent>
                    {orgList.map((org) => (
                      <SelectItem key={org.id} value={org.id}>
                        {org.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="check"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="">Select module</FormLabel>
              </div>
              {moduleList.map((module) => (
                <FormField
                  key={module.id}
                  control={form.control}
                  name="check"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={module.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(module.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, module.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== module.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {module.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <h3 className="text-sm font-[500] my-2">Allow settings</h3>
          <div className="">
            <FormField
              control={form.control}
              name="settings"
              render={({ field }) => (
                <FormItem className="flex flex-col 2 ">
                  {settingList.map((setting) => (
                    <div
                      key={setting.value}
                      className="flex items-center justify-between "
                    >
                      <FormLabel className="font-normal">
                        {setting.label}
                      </FormLabel>

                      <FormControl className="">
                        <Switch
                          checked={field.value?.includes(setting.value)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, setting.value])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== setting.value
                                  )
                                );
                          }}
                          className={``}
                        />
                      </FormControl>
                      {/* <pre>{JSON.stringify({ field }, null, 4)}</pre>  */}
                    </div>
                  ))}
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full text-white bg-green hover:bg-green/80 text-lg"
        >
          Assign
        </Button>
      </form>
    </Form>
  );
};

export default AssignModuleForm;
