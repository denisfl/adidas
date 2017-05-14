import React from 'react';
import { Group, Label, Button } from './styled';

export default () => (
  <Group>
    <Label>Size</Label>
    <Button>36</Button>
    <Button>37</Button>
    <Button>38</Button>
    <Button>39</Button>
    <Button>40</Button>
    <Button isActive>41</Button>
    <Button>42</Button>
  </Group>
);
