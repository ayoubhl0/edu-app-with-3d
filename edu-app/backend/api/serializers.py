from rest_framework import serializers
from .models import Word, Reward

class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = "__all__"

class RewardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reward
        fields = "__all__"
