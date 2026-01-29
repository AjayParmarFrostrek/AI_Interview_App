import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResumeUpload from "./ResumeUpload";
import JobDescription from "./JobDescription";

function CreateinterviewDialog() {
  const [formData, setFormData] = useState<any>({});

  const onHandleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Dialog>
      {/* Trigger Button */}
      <DialogTrigger asChild>
        <Button>Create Interview</Button>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent className="min-w-3xl">
        <DialogHeader>
          <DialogTitle>Please submit the following details.</DialogTitle>

          {/* Use a div instead of DialogDescription for complex content */}
          <div className="mt-5 w-full">
            <Tabs defaultValue="resume-upload" className="w-full">
              <TabsList>
                <TabsTrigger value="resume-upload">Resume Upload</TabsTrigger>
                <TabsTrigger value="job-description">Job Description</TabsTrigger>
              </TabsList>

              <TabsContent value="resume-upload">
                <ResumeUpload />
              </TabsContent>

              <TabsContent value="job-description">
                <JobDescription onHandleInputChange={onHandleInputChange} />
              </TabsContent>
            </Tabs>
          </div>
        </DialogHeader>

        {/* Dialog Footer with buttons */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>

          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateinterviewDialog;
