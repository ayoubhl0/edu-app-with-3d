from rest_framework import viewsets
from .models import Word, Reward
from .serializers import WordSerializer, RewardSerializer

class WordViewSet(viewsets.ModelViewSet):
    queryset = Word.objects.all().order_by('id')
    serializer_class = WordSerializer

class RewardViewSet(viewsets.ModelViewSet):
    queryset = Reward.objects.all().order_by('id')
    serializer_class = RewardSerializer
