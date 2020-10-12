import React, { useEffect } from 'react';
import { Container, OptionsList, Title } from './styles';

export default function Search() {
  useEffect(() => {
    async function showOptions() {
      const response = await api.getNet('Options');
      setOptions(response.data);
    }
    showOptions();
  }, []);

  return (
    <Container>
      <Input header placeholder="O que você deseja?" />

      <Title>Categorias</Title>
      <OptionsList
        data={Options}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Item>
            <ItemImage source={{ uri: item.categorie_url }} />
            <ItemTitle>{item.title}</ItemTitle>
          </Item>
        )}
      />
    </Container>
  );
}

Search.navigationOptions = {
  headerShown: false,
};
