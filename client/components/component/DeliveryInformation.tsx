import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DeliveryInfo } from "@/types";

interface DeliveryInformationProps {
  deliveryInfo: DeliveryInfo;
  setDeliveryInfo: (info: DeliveryInfo) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function DeliveryInformation({
  deliveryInfo,
  setDeliveryInfo,
  onNext,
  onPrevious,
}: DeliveryInformationProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={deliveryInfo.name}
                onChange={(e) =>
                  setDeliveryInfo({ ...deliveryInfo, name: e.target.value })
                }
                placeholder="Enter your name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={deliveryInfo.email}
                onChange={(e) =>
                  setDeliveryInfo({ ...deliveryInfo, email: e.target.value })
                }
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={deliveryInfo.phone}
                onChange={(e) =>
                  setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })
                }
                placeholder="Enter your phone number"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={deliveryInfo.address}
                onChange={(e) =>
                  setDeliveryInfo({ ...deliveryInfo, address: e.target.value })
                }
                placeholder="Enter your address"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={deliveryInfo.city}
                onChange={(e) =>
                  setDeliveryInfo({ ...deliveryInfo, city: e.target.value })
                }
                placeholder="Enter your city"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                value={deliveryInfo.state}
                onChange={(e) =>
                  setDeliveryInfo({ ...deliveryInfo, state: e.target.value })
                }
                placeholder="Enter your state"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="zip">Zip</Label>
              <Input
                id="zip"
                value={deliveryInfo.zip}
                onChange={(e) =>
                  setDeliveryInfo({ ...deliveryInfo, zip: e.target.value })
                }
                placeholder="Enter your zip code"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value={deliveryInfo.country}
              onChange={(e) =>
                setDeliveryInfo({ ...deliveryInfo, country: e.target.value })
              }
              placeholder="Enter your country"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={deliveryInfo.notes}
              onChange={(e) =>
                setDeliveryInfo({ ...deliveryInfo, notes: e.target.value })
              }
              placeholder="Additional notes (optional)"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-between mt-4">
        <Button variant="outline" onClick={onPrevious}>
          Back to Cart
        </Button>
        <Button onClick={onNext}>Continue to Payment</Button>
      </div>
    </div>
  );
}
