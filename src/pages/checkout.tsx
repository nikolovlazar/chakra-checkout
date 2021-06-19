import {
  Stack,
  VStack,
  HStack,
  Heading,
  Text,
  Image,
  List,
  ListItem,
  Link,
  Icon,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  SimpleGrid,
  Select,
  GridItem,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon, CheckCircleIcon, CloseIcon, LockIcon } from '@chakra-ui/icons';
import { HiOutlineCreditCard } from 'react-icons/hi';

const IPHONE_IMG = 'https://images.unsplash.com/photo-1609692814867-d668c4487979?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGlwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';

const Checkout = () => {
  return (
    <Stack h="100vh" direction={{ base: 'column', md: 'row' }}>
      <VStack
        flex={{ base: 0, md: 1 }}
        bg="bg.light"
        px={{ base: 8, lg: 16, xl: 32 }}
        py={{ base: 4, lg: 8, xl: 16 }}
        spacing={8}
        alignItems="flex-start"
        overflowY={{ base: "visible", lg: "auto" }}
      >
        <HStack justifyContent="space-between" w="full">
          <Heading fontSize="2xl">iPhone 12 Pro</Heading>
          <Text>$999.00</Text>
        </HStack>
        <Image
          src={IPHONE_IMG}
          w="full"
          rounded="xl"
        />
        <Text>5G goes Pro. A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.</Text>
        <List spacing={2}>
          <Text>Available colors:</Text>
          <ListItem>
            <HStack spacing={2} alignItems="center">
              <Icon as={ArrowForwardIcon} />
              <Text>Graphite</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack spacing={2} alignItems="center">
              <Icon as={ArrowForwardIcon} />
              <Text>Silver</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack spacing={2} alignItems="center">
              <Icon as={ArrowForwardIcon} />
              <Text>Gold</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack spacing={2} alignItems="center">
              <Icon as={ArrowForwardIcon} />
              <Text>Pacific Blue</Text>
            </HStack>
          </ListItem>
        </List>
        <Text>Here's a full list of the <Link href="#" color="brand.500">tech specs</Link>.</Text>
      </VStack>
      <VStack
        flex={{ base: 0, md: 1 }}
        px={{ base: 8, lg: 16, xl: 32 }}
        py={{ base: 4, lg: 8, xl: 16 }}
        spacing={6}
        alignItems="flex-start"
        overflowY={{ base: "visible", lg: "auto" }}
      >
        <Heading fontSize="2xl">Payment Details</Heading>
        <Text>Complete your puchase by providing your payment details.</Text>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input placeholder="luke@skywalker.com" shadow="sm" />
        </FormControl>
        <FormControl>
          <FormLabel>Card details</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              children={<HiOutlineCreditCard />}
            />
            <Input maxLength={16} placeholder="Card number" shadow="sm" />
            <InputRightElement
              minW={28}
              children={(
                <HStack w="full" spacing={1}>
                  <Input
                    w={7}
                    variant="unstyled"
                    placeholder="MM"
                    maxLength={2}
                    max={12}
                  />
                  <Text color="gray.300">/</Text>
                  <Input
                    w={7}
                    variant="unstyled"
                    placeholder="YY"
                    maxLength={2}
                    max={35}
                  />
                  <Input
                    w={8}
                    variant="unstyled"
                    placeholder="CVC"
                    maxLength={3}
                    max={999}
                  />
                </HStack>
              )}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Billing address</FormLabel>
          <SimpleGrid shadow="sm" columns={2} rounded="lg" borderWidth={1} borderColor="gray.200">
            <GridItem colSpan={2}>
              <Select
                borderX="none"
                borderTop="none"
                defaultValue="United States"
                aria-colspan={2}
                rounded="none"
                borderTopRadius="md"
              >
                <option value="United States">United States</option>
                <option value="Finland">Finland</option>
                <option value="North Macedonia">North Macedonia</option>
                <option value="Nigeria">Nigeria</option>
              </Select>
            </GridItem>
            <Input
              size="md"
              pl={2}
              borderY="none"
              borderLeft="none"
              borderBottomLeftRadius="md"
              rounded="none"
              borderColor="gray.200"
              placeholder="ZIP"
            />
            <Input
              size="md"
              pl={2}
              border="none"
              rounded="none"
              placeholder="State"
              borderBottomRightRadius="md"
            />
          </SimpleGrid>
        </FormControl>
        <FormControl>
          <FormLabel>VAT Number</FormLabel>
          <InputGroup>
            <Input shadow="sm" placeholder="GB0124589" />
            <InputRightElement
              pointerEvents="none"
              color="green.400"
              children={<Icon w={6} h={6} as={CheckCircleIcon} />}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Discount Code</FormLabel>
          <Input shadow="sm" placeholder="BLACKFRIDAY" />
        </FormControl>
        <List w="full" spacing={4}>
          <ListItem>
            <HStack w="full" alignItems="center" justifyContent="space-between">
              <Text m={0}>Subtotal</Text>
              <Text>$999.00</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack w="full" alignItems="center" justifyContent="flex-start">
              <Text m={0}>Discount</Text>
              <Button
                bg="bg.light"
                size="sm"
                rightIcon={<CloseIcon w={2} h={2} />}
              >
                BLACKFRIDAY
              </Button>
              <Spacer />
              <Text>- $99.00</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack w="full" alignItems="center" justifyContent="space-between">
              <Text m={0}>VAT (20%)</Text>
              <Text>+ $199.80</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack w="full" alignItems="center" justifyContent="space-between">
              <Text fontWeight="bold" m={0}>Total</Text>
              <Text fontWeight="bold">$1,099.80</Text>
            </HStack>
          </ListItem>
        </List>
        <Button variant="primary" w="full">Pay $16.80</Button>
        <HStack alignSelf="center">
          <Icon as={LockIcon} color="gray.300" />
          <Text color="gray.400">
            Payments are secure and encrypted
          </Text>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default Checkout;