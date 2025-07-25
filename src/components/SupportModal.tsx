import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Wallet, FileText, Users } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import supabase from "@/lib/supabase";
import { toast } from "sonner";

interface SupportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const walletAccounts = [
  { name: "Bitcoin", address: "coming soon", network: "BTC" },
  {
    name: "Ethereum & all L2s",
    address: "0xFF66d3fcBa8EF0c5DC5CF2d2c889abEEbAad37be",
    network: "ETH",
  },
  {
    name: "Solana",
    address: "Fn1ibMkM5KL8oBGmD7k3TM5WvfFdWXVqEqeXaDmyU6hJ",
    network: "SOL",
  },
];

const SupportModal: React.FC<SupportModalProps> = ({ open, onOpenChange }) => {
  const { handleSubmit, control, watch, setValue, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      isAnonymous: false,
      transactionId: "",
      knowledgeTitle: "",
      knowledgeLink: "",
      networkContact: "",
      networkReason: "",
    },
  });

  const isAnonymous = watch("isAnonymous");
  const networkReason = watch("networkReason");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    try {
      const { error } = await supabase
        .from("support")
        .insert([
          {
            name: data.name,
            email: data.email,
            transactionId: data.transactionId,
            knowledgeTitle: data.knowledgeTitle,
            knowledgeLink: data.knowledgeLink,
            networkContact: data.networkContact,
            networkReason: data.networkReason,
          },
        ])
        .select();

      if (error) {
        console.error("Submission error:", error.message);
        toast.error("Submission failed. Please try again.");
        return;
      }

      console.log("Submission successful:", data);
      toast.success("Application submitted successfully!", {
        duration: 5000,
        description: "Thank you for your interest in supporting us!",
      });
      reset();
      onOpenChange(false);
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  const handleAnonymousToggle = () => {
    const newValue = !isAnonymous;
    setValue("isAnonymous", newValue);
    if (newValue) {
      setValue("name", "");
      setValue("email", "");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] bg-black border-cyber/30">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white text-center">
            Support Our Mission
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    placeholder="Your name"
                    disabled={isAnonymous}
                    className="bg-cyber-dark/20 border-cyber/30 text-white"
                    {...field}
                  />
                )}
              />
              <Button
                variant="outline"
                size="sm"
                type="button"
                onClick={handleAnonymousToggle}
                className={`border-cyber/30 ${
                  isAnonymous ? "bg-cyber/20 text-white" : "text-white"
                }`}
              >
                {isAnonymous ? "Anonymous" : "Named"}
              </Button>
            </div>

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  type="email"
                  placeholder="Your email"
                  disabled={isAnonymous}
                  className="bg-cyber-dark/20 border-cyber/30 text-white"
                  {...field}
                />
              )}
            />
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="financial" className="border-cyber/30">
              <AccordionTrigger className="text-white hover:text-cyber">
                <div className="flex items-center gap-2">
                  <Wallet className="h-4 w-4" />
                  <span>Financial Support (Raising for €155,402)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 py-2">
                  {walletAccounts.map((wallet, index) => (
                    <div
                      key={index}
                      className="bg-cyber-dark/30 p-3 rounded-md"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-white">
                          {wallet.name}
                        </span>
                        <span className="text-xs text-gray-300">
                          {wallet.network}
                        </span>
                      </div>
                      <div className="mt-1 font-mono text-xs text-gray-300 break-all">
                        {wallet.address}
                      </div>
                    </div>
                  ))}

                  <div className="pt-2">
                    <Label
                      htmlFor="transactionId"
                      className="text-sm text-white"
                    >
                      Transaction ID (for tracking purposes)
                    </Label>
                    <Controller
                      name="transactionId"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="transactionId"
                          placeholder="Enter transaction ID"
                          className="mt-1 bg-cyber-dark/20 border-cyber/30 text-white"
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="knowledge" className="border-cyber/30">
              <AccordionTrigger className="text-white hover:text-cyber">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Knowledge Base Contribution</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 py-2">
                  <div>
                    <Label
                      htmlFor="knowledgeTitle"
                      className="text-sm text-white"
                    >
                      Title of the knowledge
                    </Label>
                    <Controller
                      name="knowledgeTitle"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="knowledgeTitle"
                          placeholder="Your thoughts"
                          className="mt-1 bg-cyber-dark/20 border-cyber/30 text-white"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="knowledgeLink"
                      className="text-sm text-white"
                    >
                      Link (website, LinkedIn post, Twitter thread, or research)
                    </Label>
                    <Controller
                      name="knowledgeLink"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="knowledgeLink"
                          placeholder="https://"
                          className="mt-1 bg-cyber-dark/20 border-cyber/30 text-white"
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="network" className="border-cyber/30">
              <AccordionTrigger className="text-white hover:text-cyber">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Network Recommendation (47)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 py-2">
                  <div>
                    <Label
                      htmlFor="networkContact"
                      className="text-sm text-white"
                    >
                      Who do you recommend join us or for us to contact?
                    </Label>
                    <Controller
                      name="networkContact"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="networkContact"
                          placeholder="Name or contact information"
                          className="mt-1 bg-cyber-dark/20 border-cyber/30 text-white"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="networkReason"
                      className="text-sm text-white"
                    >
                      Tell us why (280 characters max)
                    </Label>
                    <Controller
                      name="networkReason"
                      control={control}
                      render={({ field }) => (
                        <Textarea
                          id="networkReason"
                          maxLength={280}
                          placeholder="Why should we connect?"
                          className="mt-1 bg-cyber-dark/20 border-cyber/30 text-white"
                          {...field}
                        />
                      )}
                    />
                    <div className="text-xs text-right mt-1 text-gray-400">
                      {networkReason.length}/280
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="pt-4 text-center">
            <p className="text-nature text-sm mb-4 font-medium">
              Thank you for your support! 🙏
            </p>
            <Button
              type="submit"
              className="bg-gradient-to-r from-cyber to-nature hover:opacity-90 text-white w-full"
            >
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SupportModal;
